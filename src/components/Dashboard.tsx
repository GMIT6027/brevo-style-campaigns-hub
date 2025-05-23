
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/components/ui/chart';
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, CartesianGrid } from 'recharts';
import CampaignAnalytics from './CampaignAnalytics';
import { Mail } from 'lucide-react';

interface Campaign {
  id: string;
  name: string;
  sentDate: string;
  totalRecipients: number;
  delivered: number;
  opened: number;
  clicked: number;
  bounced: number;
}

interface DashboardProps {
  campaigns: Campaign[];
  selectedCampaign: Campaign | null;
  onSelectCampaign: (campaign: Campaign) => void;
}

const Dashboard = ({ campaigns, selectedCampaign, onSelectCampaign }: DashboardProps) => {
  const chartData = [
    { name: 'Delivered', value: selectedCampaign?.delivered || 0 },
    { name: 'Opened', value: selectedCampaign?.opened || 0 },
    { name: 'Clicked', value: selectedCampaign?.clicked || 0 },
  ];

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Campaign Dashboard</h2>

      {selectedCampaign && (
        <>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">{selectedCampaign.name}</h3>
          <CampaignAnalytics 
            stats={{
              totalRecipients: selectedCampaign.totalRecipients,
              delivered: selectedCampaign.delivered,
              opened: selectedCampaign.opened,
              clicked: selectedCampaign.clicked,
              bounced: selectedCampaign.bounced,
              complaints: 0
            }} 
          />
          
          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5 text-blue-600" />
                Campaign Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64">
                <ChartContainer 
                  config={{ 
                    delivered: { color: '#2563eb' }, 
                    opened: { color: '#9333ea' }, 
                    clicked: { color: '#d97706' }
                  }}
                >
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={chartData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis allowDecimals={false} />
                      <ChartTooltip 
                        content={<ChartTooltipContent />} 
                      />
                      <Bar dataKey="value" fill="var(--color-delivered)" />
                    </BarChart>
                  </ResponsiveContainer>
                </ChartContainer>
              </div>
            </CardContent>
          </Card>
        </>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Recent Campaigns</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Sent Date</TableHead>
                <TableHead>Recipients</TableHead>
                <TableHead>Delivered</TableHead>
                <TableHead>Opened</TableHead>
                <TableHead>Clicked</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {campaigns.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={6} className="text-center py-8 text-muted-foreground">
                    No campaigns found. Create your first campaign to get started.
                  </TableCell>
                </TableRow>
              ) : (
                campaigns.map((campaign) => (
                  <TableRow 
                    key={campaign.id} 
                    className="cursor-pointer hover:bg-muted/60"
                    onClick={() => onSelectCampaign(campaign)}
                  >
                    <TableCell className="font-medium">{campaign.name}</TableCell>
                    <TableCell>{campaign.sentDate}</TableCell>
                    <TableCell>{campaign.totalRecipients}</TableCell>
                    <TableCell>{campaign.delivered}</TableCell>
                    <TableCell>{campaign.opened}</TableCell>
                    <TableCell>{campaign.clicked}</TableCell>
                  </TableRow>
                ))
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default Dashboard;
