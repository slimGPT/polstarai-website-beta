import { render } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import OrbitSphere from './OrbitSphere';

describe('OrbitSphere', () => {
  it('renders a canvas element', () => {
    const { container } = render(<OrbitSphere />);
    const canvas = container.querySelector('canvas');
    expect(canvas).toBeTruthy();
    expect(canvas?.tagName).toBe('CANVAS');
  });

  it('applies correct styling to canvas wrapper', () => {
    const { container } = render(<OrbitSphere />);
    const wrapper = container.querySelector('div');
    expect(wrapper).toBeTruthy();
    expect(wrapper?.className).toContain('flex');
    expect(wrapper?.className).toContain('items-center');
    expect(wrapper?.className).toContain('justify-center');
  });

  it('canvas has correct style attribute', () => {
    const { container } = render(<OrbitSphere />);
    const canvas = container.querySelector('canvas') as HTMLCanvasElement;
    expect(canvas.style.width).toBe('400px');
    expect(canvas.style.height).toBe('400px');
  });
});
