import {useEffect} from 'react';

const useScript = (scriptBody: string) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.innerHTML = scriptBody;
    script.async = true;

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    }
  }, [scriptBody]);
};

export default useScript;
