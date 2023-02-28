import { Inter } from '@next/font/google';

// Note: The subsets need to use single quotes because the font loader values must be explicitly written literal.
// eslint-disable-next-line @typescript-eslint/quotes
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="container mx-auto text-center px-20 w-6/12">
        <h3 className="text-3xl font-bold mb-4">Meet🚀</h3>
        <h1 className="text-6xl font-bold">MeetupRadar</h1>
        <p className="text-lg mt-6">
          MeetupRadar is an open-source web app that allows users to see the
          location of tech meetups in their area. Using a geocoding API to
          convert addresses to coordinates. Users can also search for meetups
          based on keywords, location, or date range using the search bar.
        </p>
      </div>
    </div>
  );
}
