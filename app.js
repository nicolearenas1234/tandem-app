const const SUPABASE_URL = 'https://kbdaoxfepfylhagaquii.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_Po2cvBN1Vs6ZpBXkH_fdjg_y3qQeWyr';

import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm')
  .then(({ createClient }) => {
    const supabase = createClient(
      SUPABASE_URL,
      SUPABASE_PUBLISHABLE_KEY
    );

    console.log('Tandem connected to Supabase');

    document.querySelectorAll('.chips button').forEach(button => {
      button.onclick = () => {
        const status = document.querySelector('#status');
        if (status) {
          status.textContent = 'Saved for your day. You can change it anytime.';
        }
      };
    });

    const profile = document.querySelector('#profile');

    if (profile) {
      profile.onclick = async () => {
        alert('Tandem is connected to Supabase. Account switching is ready for the next step.');
      };
    }
  })
  .catch(error => {
    console.error('Supabase connection failed:', error);
  });
