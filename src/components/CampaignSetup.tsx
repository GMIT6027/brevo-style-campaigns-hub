
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Send, Users } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CampaignSetupProps {
  savedEmails: {id: string; name: string}[];
  onSendTest: (emails: string[]) => void;
  onSendCampaign: (campaignData: any) => void;
}

const CampaignSetup = ({ savedEmails, onSendTest, onSendCampaign }: CampaignSetupProps) => {
  const { toast } = useToast();
  const [campaign, setCampaign] = useState({
    name: '',
    emailId: '',
    recipients: '',
    testEmails: ''
  });

  const handleSendTest = () => {
    if (!campaign.emailId || !campaign.testEmails) {
      toast({
        title: "Error",
        description: "Please select an email and provide test recipient(s)",
        variant: "destructive"
      });
      return;
    }

    const emails = campaign.testEmails.split(',').map(email => email.trim());
    onSendTest(emails);
  };

  const handleSendCampaign = () => {
    if (!campaign.name || !campaign.emailId || !campaign.recipients) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const recipients = campaign.recipients.split(',').map(email => email.trim());
    onSendCampaign({
      name: campaign.name,
      emailId: campaign.emailId,
      recipients
    });
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calendar className="h-5 w-5 text-blue-600" />
          Campaign Setup
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Name *
            </label>
            <Input
              placeholder="Summer Promotion"
              value={campaign.name}
              onChange={(e) => setCampaign({...campaign, name: e.target.value})}
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Email Template *
            </label>
            <Select value={campaign.emailId} onValueChange={(value) => setCampaign({...campaign, emailId: value})}>
              <SelectTrigger>
                <SelectValue placeholder="Select an email template" />
              </SelectTrigger>
              <SelectContent>
                {savedEmails.map(email => (
                  <SelectItem key={email.id} value={email.id}>
                    {email.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Test Recipients (comma separated) *
            </label>
            <Textarea
              placeholder="test1@example.com, test2@example.com"
              value={campaign.testEmails}
              onChange={(e) => setCampaign({...campaign, testEmails: e.target.value})}
              rows={2}
            />
            <div className="mt-2">
              <Button onClick={handleSendTest} variant="outline" size="sm">
                <Send className="h-4 w-4 mr-2" />
                Send Test Emails
              </Button>
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Recipients (comma separated) *
            </label>
            <Textarea
              placeholder="recipient1@example.com, recipient2@example.com"
              value={campaign.recipients}
              onChange={(e) => setCampaign({...campaign, recipients: e.target.value})}
              rows={4}
            />
          </div>
          
          <div className="flex justify-end">
            <Button onClick={handleSendCampaign}>
              <Send className="h-4 w-4 mr-2" />
              Send Campaign
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CampaignSetup;
