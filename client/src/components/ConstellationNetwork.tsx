import { useEffect, useRef, useState } from 'react';
import { agentColors, AgentName } from '@/constants/agentColors';

interface ConstellationNode {
  id: number;
  x: number;
  y: number;
  size: number;
  opacity: number;
  color?: string;
}

interface ConstellationLink {
  from: number;
  to: number;
  distance: number;
}

interface ConstellationNetworkProps {
  density?: 'low' | 'medium' | 'high';
  color?: string;
  sectionId?: string;
  className?: string;
}

export default function ConstellationNetwork({
  density = 'medium',
  color = '#ffffff',
  sectionId = '',
  className = '',
}: ConstellationNetworkProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const [nodes, setNodes] = useState<ConstellationNode[]>([]);
  const [links, setLinks] = useState<ConstellationLink[]>([]);
  const [hoveredNode, setHoveredNode] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const nodeCounts = {
    low: 8,
    medium: 15,
    high: 25,
  };

  useEffect(() => {
    if (!containerRef.current) return;

    const count = nodeCounts[density];
    const newNodes: ConstellationNode[] = Array.from({ length: count }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 2,
      opacity: Math.random() * 0.4 + 0.3,
      color: color,
    }));

    // Create links between nearby nodes (constellation pattern)
    const newLinks: ConstellationLink[] = [];
    for (let i = 0; i < newNodes.length; i++) {
      for (let j = i + 1; j < newNodes.length; j++) {
        const dx = newNodes[i].x - newNodes[j].x;
        const dy = newNodes[i].y - newNodes[j].y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Connect nodes that are within 25% of container size
        if (distance < 25) {
          newLinks.push({ from: i, to: j, distance });
        }
      }
    }

    setNodes(newNodes);
    setLinks(newLinks);
  }, [density, color]);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = containerRef.current?.getBoundingClientRect();
      if (rect) {
        setMousePos({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    containerRef.current.addEventListener('mousemove', handleMouseMove);
    return () => {
      containerRef.current?.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const handleNodeHover = (nodeId: number) => {
    setHoveredNode(nodeId);
  };

  const handleNodeLeave = () => {
    setHoveredNode(null);
  };

  // Find nodes connected to hovered node
  const connectedNodes = hoveredNode !== null
    ? links
        .filter(link => link.from === hoveredNode || link.to === hoveredNode)
        .map(link => link.from === hoveredNode ? link.to : link.from)
    : [];

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <svg
        ref={svgRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
        style={{ opacity: 0.6 }}
      >
        {/* Base constellation lines */}
        {links.map((link, idx) => {
          const fromNode = nodes[link.from];
          const toNode = nodes[link.to];
          if (!fromNode || !toNode) return null;

          const isHovered = hoveredNode !== null && 
            (link.from === hoveredNode || link.to === hoveredNode);

          return (
            <line
              key={idx}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke={color}
              strokeWidth={isHovered ? '1.5' : '0.5'}
              opacity={isHovered ? 0.6 : 0.15} // Reduced contrast by 25% (0.8->0.6, 0.2->0.15)
              className="transition-all duration-300"
            />
          );
        })}

        {/* Hover connection lines */}
        {hoveredNode !== null && connectedNodes.map((nodeId) => {
          const fromNode = nodes[hoveredNode];
          const toNode = nodes[nodeId];
          if (!fromNode || !toNode) return null;

          return (
            <line
              key={`hover-${nodeId}`}
              x1={`${fromNode.x}%`}
              y1={`${fromNode.y}%`}
              x2={`${toNode.x}%`}
              y2={`${toNode.y}%`}
              stroke={color}
              strokeWidth="2"
              opacity={0.675} // Reduced by 25% (0.9 -> 0.675)
              className="transition-all duration-200"
              style={{
                filter: 'drop-shadow(0 0 4px currentColor)',
              }}
            />
          );
        })}
      </svg>

      {/* Nodes (dots) */}
      {nodes.map((node) => {
        const isHovered = hoveredNode === node.id;
        const isConnected = connectedNodes.includes(node.id);

        return (
          <div
            key={node.id}
            className="absolute rounded-full transition-all duration-300 cursor-pointer pointer-events-none"
            style={{
              left: `${node.x}%`,
              top: `${node.y}%`,
              width: `${node.size}px`,
              height: `${node.size}px`,
              transform: 'translate(-50%, -50%)',
              backgroundColor: color,
              opacity: isHovered ? 1 : node.opacity,
              boxShadow: isHovered
                ? `0 0 ${node.size * 4}px ${color}, 0 0 ${node.size * 8}px ${color}40`
                : `0 0 ${node.size * 2}px ${color}60`,
              scale: isHovered ? 1.5 : 1,
            }}
            onMouseEnter={() => handleNodeHover(node.id)}
            onMouseLeave={handleNodeLeave}
          />
        );
      })}
    </div>
  );
}

