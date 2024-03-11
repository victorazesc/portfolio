import { useState, useEffect } from 'react';

function useCookieConsent(cookieName: string): [boolean, () => void, () => void] {
  const [isConsented, setIsConsented] = useState<boolean>(false);

  const acceptCookies = (): void => {
    setIsConsented(true);
    localStorage.setItem(cookieName, 'accepted');
  };

  const deniedCookies = (): void => {
    setIsConsented(true);
  };

  useEffect(() => {
    const storedCookieConsent = localStorage.getItem(cookieName);
    if (storedCookieConsent === 'accepted') {
      setIsConsented(true);
    }
  }, [cookieName]);

  return [isConsented, acceptCookies, deniedCookies];
}

export default useCookieConsent;
