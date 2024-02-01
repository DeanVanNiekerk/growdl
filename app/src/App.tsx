import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { Session, createClient } from '@supabase/supabase-js';
import React, { useEffect, useState } from 'react';
import './App.css';

const supabase = createClient(
  'https://yjenbhkoirjtnxikdrtj.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlqZW5iaGtvaXJqdG54aWtkcnRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDY3ODk2MDUsImV4cCI6MjAyMjM2NTYwNX0.h1zskSgmi4gPNWFpQN47UhkqK5Lv5jvcZIqhDtQ58Yg',
);

const App: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });

    return () => subscription.unsubscribe();
  }, []);

  if (!session) {
    return (
      <Auth
        supabaseClient={supabase}
        appearance={{ theme: ThemeSupa }}
        theme="dark"
        providers={['google']}
        onlyThirdPartyProviders
      />
    );
  } else {
    return (
      <button className="btn" onClick={() => supabase.auth.signOut()}>
        Sign Out
      </button>
    );
  }
};

export default App;
