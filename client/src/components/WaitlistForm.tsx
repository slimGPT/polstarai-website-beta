import { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { db } from '@/lib/firebase';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface WaitlistFormProps {
  className?: string;
}

export default function WaitlistForm({ className }: WaitlistFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    childAge: '',
    relationship: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear error when user starts typing
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      // Add document to Firestore 'waitlist' collection
      await addDoc(collection(db, 'waitlist'), {
        name: formData.name,
        email: formData.email,
        childAge: formData.childAge || null,
        relationship: formData.relationship || null,
        message: formData.message || null,
        timestamp: new Date(),
      });

      // Show confirmation message
      setShowConfirmation(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        childAge: '',
        relationship: '',
        message: '',
      });

      // Hide confirmation after 5 seconds (optional)
      setTimeout(() => {
        setShowConfirmation(false);
      }, 5000);
    } catch (err) {
      console.error('Error submitting form:', err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showConfirmation) {
    return (
      <div className={cn("flex flex-col items-center justify-center p-8 text-center", className)}>
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 max-w-md w-full">
          <div className="mb-4">
            <svg
              className="w-16 h-16 mx-auto text-green-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-white mb-2">
            Thanks for signing up!
          </h3>
          <p className="text-white/80">
            We'll be in touch soon.
          </p>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={cn("space-y-4", className)}>
      <div className="space-y-2">
        <Label htmlFor="name" className="text-white/90">
          Name *
        </Label>
        <Input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          placeholder="Your name"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="email" className="text-white/90">
          Email *
        </Label>
        <Input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="your.email@example.com"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="childAge" className="text-white/90">
          Child's Age
        </Label>
        <Input
          type="text"
          id="childAge"
          name="childAge"
          value={formData.childAge}
          onChange={handleChange}
          placeholder="e.g., 5 years old"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="relationship" className="text-white/90">
          Relationship
        </Label>
        <Input
          type="text"
          id="relationship"
          name="relationship"
          value={formData.relationship}
          onChange={handleChange}
          placeholder="e.g., Parent, Educator"
          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/20"
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message" className="text-white/90">
          Message
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell us what you're most excited about..."
          className="bg-white/5 border-white/10 text-white placeholder:text-white/40 focus:border-blue-500 focus:ring-blue-500/20 resize-none"
        />
      </div>

      {error && (
        <div className="p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
          {error}
        </div>
      )}

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold shadow-lg shadow-blue-500/30"
      >
        {isSubmitting ? 'Submitting...' : 'Join the Waitlist'}
      </Button>
    </form>
  );
}

