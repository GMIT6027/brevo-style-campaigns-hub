
import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Dashboard from '../components/Dashboard';
import EmailCompose from '../components/EmailCompose';
import CampaignSetup from '../components/CampaignSetup';
import MailTrackingTable from '../components/MailTrackingTable';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from '@/hooks/use-toast';

// Mock data for demonstration purposes
const initialCampaigns = [
  {
    id: '1',
    name: 'Newsletter V2',
    sentDate: '2025-05-19',
    totalRecipients: 3,
    delivered: 0,
    opened: 2,
    clicked: 0,
    bounced: 0
  },
  {
    id: '2',
    name: 'Product Launch',
    sentDate: '2025-05-15',
    totalRecipients: 120,
    delivered: 115,
    opened: 78,
    clicked: 32,
    bounced: 5
  }
];

const initialRecipients = [
  { 
    email: 'samip@asturisk.com', 
    status: 'Sent' as const, 
    lastUpdated: '5/19/2025, 5:09:19 PM', 
    details: ''
  },
  { 
    email: 'sampshah86@gmail.com', 
    status: 'Opened' as const, 
    lastUpdated: '5/19/2025, 6:17:03 PM', 
    details: 'Opened: 5/19/2025, 6:17:03 PM' 
  },
  { 
    email: 'ssam1771@gmail.com', 
    status: 'Opened' as const, 
    lastUpdated: '5/19/2025, 6:16:53 PM', 
    details: 'Opened: 5/19/2025, 6:16:53 PM' 
  }
];

const Index = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('dashboard');
  const [campaigns, setCampaigns] = useState(initialCampaigns);
  const [selectedCampaign, setSelectedCampaign] = useState(initialCampaigns[0]);
  const [recipients, setRecipients] = useState(initialRecipients);
  
  const [email, setEmail] = useState({
    name: '',
    subject: '',
    body: ''
  });
  
  const [savedEmails, setSavedEmails] = useState<{id: string; name: string}[]>([
    { id: 'email1', name: 'Welcome Email' },
    { id: 'email2', name: 'Monthly Newsletter' }
  ]);
  
  const handleSaveEmail = () => {
    if (!email.name || !email.subject || !email.body) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive"
      });
      return;
    }
    
    const newEmail = {
      id: `email${savedEmails.length + 1}`,
      name: email.name
    };
    
    setSavedEmails([...savedEmails, newEmail]);
    
    toast({
      title: "Email Saved",
      description: `"${email.name}" has been saved successfully!`
    });
    
    setEmail({
      name: '',
      subject: '',
      body: ''
    });
  };
  
  const handleSendTest = (testEmails: string[]) => {
    toast({
      title: "Test Emails Sent",
      description: `Test emails sent to ${testEmails.join(', ')}`
    });
  };
  
  const handleSendCampaign = (campaignData: any) => {
    const newCampaign = {
      id: `${campaigns.length + 1}`,
      name: campaignData.name,
      sentDate: new Date().toISOString().split('T')[0],
      totalRecipients: campaignData.recipients.length,
      delivered: Math.floor(campaignData.recipients.length * 0.95),
      opened: Math.floor(campaignData.recipients.length * 0.7),
      clicked: Math.floor(campaignData.recipients.length * 0.3),
      bounced: Math.floor(campaignData.recipients.length * 0.05)
    };
    
    setCampaigns([newCampaign, ...campaigns]);
    setSelectedCampaign(newCampaign);
    setActiveTab('dashboard');
    
    toast({
      title: "Campaign Sent!",
      description: `"${campaignData.name}" has been sent to ${campaignData.recipients.length} recipients.`
    });
  };
  
  const handleSelectCampaign = (campaign: any) => {
    setSelectedCampaign(campaign);
  };
  
  return (
    <div className="min-h-screen bg-white flex flex-col">
      <Header />
      
      <main className="flex-grow py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">Email Marketing Dashboard</h1>
          
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-8">
              <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
              <TabsTrigger value="compose">Create Email</TabsTrigger>
              <TabsTrigger value="campaign">Set Up Campaign</TabsTrigger>
              <TabsTrigger value="tracking">Email Tracking</TabsTrigger>
            </TabsList>
            
            <TabsContent value="dashboard">
              <Dashboard 
                campaigns={campaigns} 
                selectedCampaign={selectedCampaign} 
                onSelectCampaign={handleSelectCampaign} 
              />
            </TabsContent>
            
            <TabsContent value="compose">
              <EmailCompose 
                email={email}
                setEmail={setEmail}
                onSave={handleSaveEmail}
              />
            </TabsContent>
            
            <TabsContent value="campaign">
              <CampaignSetup 
                savedEmails={savedEmails}
                onSendTest={handleSendTest}
                onSendCampaign={handleSendCampaign}
              />
            </TabsContent>
            
            <TabsContent value="tracking">
              <MailTrackingTable 
                campaignName={selectedCampaign?.name || ''} 
                recipients={recipients} 
              />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
