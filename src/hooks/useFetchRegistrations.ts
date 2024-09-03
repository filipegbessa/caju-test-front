import { useState, useEffect } from 'react';
import { fetchRegisters } from '~/api/register';
import { IRegistration } from '~/types/registration';

export const useFetchRegistrations = (): IRegistration[] => {
  const [registrations, setRegistrations] = useState<IRegistration[]>([]);

  useEffect(() => {
    const fetchRegistrations = async () => {
      try {
        const data = await fetchRegisters();
        setRegistrations(data || []);
      } catch (error) {
        console.error('Error fetching registrations:', error);
      }
    };

    fetchRegistrations();
  }, []);

  return registrations;
};
