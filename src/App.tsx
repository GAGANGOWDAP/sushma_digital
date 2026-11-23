import React, { Suspense, lazy } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';
import { RootLayout } from '@/layouts/RootLayout';

// Eager load Home for instant LCP on landing
import Home from '@/pages/Home';

// Lazy-load secondary pages for optimal code splitting & minimal bundle size
const About = lazy(() => import('@/pages/About'));
const Services = lazy(() => import('@/pages/Services'));
const Portfolio = lazy(() => import('@/pages/Portfolio'));
const Gallery = lazy(() => import('@/pages/Gallery'));
const Pricing = lazy(() => import('@/pages/Pricing'));
const Testimonials = lazy(() => import('@/pages/Testimonials'));
const Blog = lazy(() => import('@/pages/Blog'));
const BlogPostDetail = lazy(() => import('@/pages/BlogPostDetail'));
const Contact = lazy(() => import('@/pages/Contact'));
const Book = lazy(() => import('@/pages/Book'));
const FAQ = lazy(() => import('@/pages/FAQ'));
const Sitemap = lazy(() => import('@/pages/Sitemap'));
const Privacy = lazy(() => import('@/pages/Privacy'));
const Terms = lazy(() => import('@/pages/Terms'));
const NotFound = lazy(() => import('@/pages/NotFound'));

function PageLoader() {
  return (
    <div className="min-h-[50vh] flex items-center justify-center" aria-label="Loading page">
      <div className="w-8 h-8 rounded-full border-2 border-[#E2E6EC] border-t-[#D92F26] animate-spin" />
    </div>
  );
}

const queryClient = new QueryClient();

function Router() {
  return (
    <Suspense fallback={<PageLoader />}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/services" component={Services} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/gallery" component={Gallery} />
        <Route path="/pricing" component={Pricing} />
        <Route path="/testimonials" component={Testimonials} />
        <Route path="/blog" component={Blog} />
        <Route path="/blog/:id" component={BlogPostDetail} />
        <Route path="/contact" component={Contact} />
        <Route path="/book" component={Book} />
        <Route path="/faq" component={FAQ} />
        <Route path="/sitemap" component={Sitemap} />
        <Route path="/privacy" component={Privacy} />
        <Route path="/terms" component={Terms} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <RootLayout>
            <Router />
          </RootLayout>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
