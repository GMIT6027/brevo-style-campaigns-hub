
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Github, Facebook, Mail } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Signup = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  
  const handleGoogleSignup = () => {
    // In a real implementation, this would connect to Google OAuth
    toast({
      title: "Google Authentication",
      description: "This would connect to Google OAuth in a real implementation.",
    });
    
    // Mock successful signup
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };
  
  const handleEmailSignup = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Mock signup process
    toast({
      title: "Account Created",
      description: "Your account has been successfully created!",
    });
    
    // Mock successful signup
    setTimeout(() => {
      navigate('/dashboard');
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Brevo
            </h1>
          </div>
          <CardTitle className="text-2xl text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Get started with your email marketing journey
          </CardDescription>
        </CardHeader>
        <CardContent className="grid gap-4">
          <div className="grid grid-cols-1 gap-3">
            <Button 
              variant="outline" 
              onClick={handleGoogleSignup}
              className="bg-white border border-gray-300 hover:bg-gray-50"
            >
              <Mail className="mr-2 h-4 w-4" />
              Sign up with Google
            </Button>
            <Button variant="outline" className="bg-white border border-gray-300 hover:bg-gray-50">
              <Facebook className="mr-2 h-4 w-4" />
              Sign up with Facebook
            </Button>
            <Button variant="outline" className="bg-white border border-gray-300 hover:bg-gray-50">
              <Github className="mr-2 h-4 w-4" />
              Sign up with GitHub
            </Button>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t" />
            </div>
            <div className="relative flex justify-center text-xs uppercase">
              <span className="bg-white px-2 text-gray-500">Or continue with</span>
            </div>
          </div>
          <form onSubmit={handleEmailSignup}>
            <div className="grid gap-4">
              <div className="grid gap-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="John Doe"
                  type="text"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  placeholder="name@example.com"
                  type="email"
                  required
                />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  required
                />
              </div>
              <div className="flex items-center space-x-2">
                <input type="checkbox" id="terms" className="h-4 w-4 border-gray-300 rounded" required />
                <Label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-blue-600 hover:text-blue-800">
                    Privacy Policy
                  </a>
                </Label>
              </div>
              <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">Create account</Button>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <a 
              className="text-blue-600 hover:text-blue-800 font-medium cursor-pointer"
              onClick={() => navigate('/login')}
            >
              Sign in
            </a>
          </div>
          <div className="text-center text-sm text-gray-500">
            <a 
              className="hover:text-gray-800 cursor-pointer"
              onClick={() => navigate('/')}
            >
              Back to landing page
            </a>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signup;
