
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Badge } from '@/components/ui/badge';
import { Mail, Send, Users, Calendar, BarChart } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CampaignSection = () => {
  const [campaigns, setCampaigns] = useState([
    {
      id: 1,
      name: "Welcome Series",
      status: "Active",
      recipients: 2340,
      openRate: "24.3%",
      clickRate: "4.8%",
      sent: "2 days ago"
    },
    {
      id: 2,
      name: "Product Launch",
      status: "Scheduled",
      recipients: 5120,
      openRate: "22.1%",
      clickRate: "5.2%",
      sent: "Tomorrow"
    },
    {
      id: 3,
      name: "Monthly Newsletter",
      status: "Draft",
      recipients: 12560,
      openRate: "18.7%",
      clickRate: "3.9%",
      sent: "Not sent"
    }
  ]);

  const [newCampaign, setNewCampaign] = useState({
    name: "",
    subject: "",
    content: "",
    audience: ""
  });

  const { toast } = useToast();

  const handleCreateCampaign = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!newCampaign.name || !newCampaign.subject || !newCampaign.content) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }

    const campaign = {
      id: campaigns.length + 1,
      name: newCampaign.name,
      status: "Draft",
      recipients: Math.floor(Math.random() * 10000) + 1000,
      openRate: "0%",
      clickRate: "0%",
      sent: "Not sent"
    };

    setCampaigns([campaign, ...campaigns]);
    setNewCampaign({ name: "", subject: "", content: "", audience: "" });
    
    toast({
      title: "Campaign Created",
      description: `"${newCampaign.name}" has been created successfully!`
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-green-100 text-green-800";
      case "Scheduled":
        return "bg-blue-100 text-blue-800";
      case "Draft":
        return "bg-gray-100 text-gray-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Create & Manage Campaigns
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Build powerful email campaigns that engage your audience and drive conversions
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Campaign Creation Form */}
          <Card className="shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Create New Campaign
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleCreateCampaign} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Campaign Name *
                  </label>
                  <Input
                    placeholder="Enter campaign name"
                    value={newCampaign.name}
                    onChange={(e) => setNewCampaign({...newCampaign, name: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Subject Line *
                  </label>
                  <Input
                    placeholder="Enter email subject"
                    value={newCampaign.subject}
                    onChange={(e) => setNewCampaign({...newCampaign, subject: e.target.value})}
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Target Audience
                  </label>
                  <Select 
                    value={newCampaign.audience} 
                    onValueChange={(value) => setNewCampaign({...newCampaign, audience: value})}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select audience" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all-subscribers">All Subscribers</SelectItem>
                      <SelectItem value="new-customers">New Customers</SelectItem>
                      <SelectItem value="vip-customers">VIP Customers</SelectItem>
                      <SelectItem value="inactive-users">Inactive Users</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Content *
                  </label>
                  <Textarea
                    placeholder="Write your email content here..."
                    rows={4}
                    value={newCampaign.content}
                    onChange={(e) => setNewCampaign({...newCampaign, content: e.target.value})}
                    required
                  />
                </div>

                <div className="flex gap-3">
                  <Button type="submit" className="flex-1 bg-blue-600 hover:bg-blue-700">
                    <Send className="h-4 w-4 mr-2" />
                    Create Campaign
                  </Button>
                  <Button type="button" variant="outline" className="flex-1">
                    Save as Draft
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Campaign List */}
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">Recent Campaigns</h3>
            
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <Card key={campaign.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">
                          {campaign.name}
                        </h4>
                        <Badge className={getStatusColor(campaign.status)}>
                          {campaign.status}
                        </Badge>
                      </div>
                      <div className="text-right text-sm text-gray-600">
                        {campaign.sent}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Users className="h-4 w-4 text-gray-400 mr-1" />
                        </div>
                        <div className="text-lg font-semibold text-gray-900">
                          {campaign.recipients.toLocaleString()}
                        </div>
                        <div className="text-xs text-gray-600">Recipients</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <Mail className="h-4 w-4 text-gray-400 mr-1" />
                        </div>
                        <div className="text-lg font-semibold text-blue-600">
                          {campaign.openRate}
                        </div>
                        <div className="text-xs text-gray-600">Open Rate</div>
                      </div>
                      
                      <div className="text-center">
                        <div className="flex items-center justify-center mb-1">
                          <BarChart className="h-4 w-4 text-gray-400 mr-1" />
                        </div>
                        <div className="text-lg font-semibold text-green-600">
                          {campaign.clickRate}
                        </div>
                        <div className="text-xs text-gray-600">Click Rate</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CampaignSection;
