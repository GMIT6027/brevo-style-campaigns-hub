
import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail } from 'lucide-react';

interface EmailComposeProps {
  email: {
    name: string;
    subject: string;
    body: string;
  };
  setEmail: React.Dispatch<React.SetStateAction<{
    name: string;
    subject: string;
    body: string;
  }>>;
  onSave: () => void;
}

const EmailCompose = ({ email, setEmail, onSave }: EmailComposeProps) => {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Mail className="h-5 w-5 text-blue-600" />
          Compose Email
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Name *
            </label>
            <Input
              placeholder="Monthly Newsletter"
              value={email.name}
              onChange={(e) => setEmail({...email, name: e.target.value})}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Subject Line *
            </label>
            <Input
              placeholder="Your May Newsletter is here!"
              value={email.subject}
              onChange={(e) => setEmail({...email, subject: e.target.value})}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Body *
            </label>
            <Textarea
              placeholder="Write your email content here..."
              rows={8}
              value={email.body}
              onChange={(e) => setEmail({...email, body: e.target.value})}
              required
            />
          </div>
          
          <div className="flex justify-end">
            <Button onClick={onSave}>
              Save Email
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default EmailCompose;
