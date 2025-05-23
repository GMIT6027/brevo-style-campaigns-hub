
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

interface AnalyticsProps {
  stats: {
    totalRecipients: number;
    delivered: number;
    opened: number;
    clicked: number;
    bounced: number;
    complaints: number;
  };
}

const CampaignAnalytics = ({ stats }: AnalyticsProps) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-sm text-gray-500 mb-1">Total Recipients</p>
          <p className="text-2xl font-bold text-blue-600">{stats.totalRecipients}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-sm text-gray-500 mb-1">Delivered</p>
          <p className="text-2xl font-bold text-green-600">{stats.delivered}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-sm text-gray-500 mb-1">Opened</p>
          <p className="text-2xl font-bold text-purple-600">{stats.opened}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-sm text-gray-500 mb-1">Clicked</p>
          <p className="text-2xl font-bold text-amber-600">{stats.clicked}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-sm text-gray-500 mb-1">Bounced</p>
          <p className="text-2xl font-bold text-red-600">{stats.bounced}</p>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4 text-center">
          <p className="text-sm text-gray-500 mb-1">Complaints</p>
          <p className="text-2xl font-bold text-gray-600">{stats.complaints}</p>
        </CardContent>
      </Card>
    </div>
  );
};

export default CampaignAnalytics;
