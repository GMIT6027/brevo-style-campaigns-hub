
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';

interface Recipient {
  email: string;
  status: 'Sent' | 'Delivered' | 'Opened' | 'Clicked' | 'Bounced';
  lastUpdated: string;
  details: string;
}

interface MailTrackingTableProps {
  campaignName: string;
  recipients: Recipient[];
}

const MailTrackingTable = ({ campaignName, recipients }: MailTrackingTableProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Opened':
        return 'bg-yellow-100 text-yellow-800';
      case 'Clicked':
        return 'bg-green-100 text-green-800';
      case 'Sent':
        return 'bg-blue-100 text-blue-800';
      case 'Delivered':
        return 'bg-purple-100 text-purple-800';
      case 'Bounced':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Email Tracking Details - {campaignName}</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border rounded-md mb-6 p-4 bg-gray-50">
          <div className="text-sm font-medium">Delivery Status</div>
          <div className="text-sm mt-1">
            Sent: {recipients.length} | 
            Delivered: {recipients.filter(r => r.status === 'Delivered' || r.status === 'Opened' || r.status === 'Clicked').length} | 
            Bounced: {recipients.filter(r => r.status === 'Bounced').length}
          </div>
        </div>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Email</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Details</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recipients.map((recipient, idx) => (
                <TableRow key={idx}>
                  <TableCell className="font-medium">{recipient.email}</TableCell>
                  <TableCell>
                    <Badge className={getStatusColor(recipient.status)}>
                      {recipient.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{recipient.lastUpdated}</TableCell>
                  <TableCell>{recipient.details}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </CardContent>
    </Card>
  );
};

export default MailTrackingTable;
