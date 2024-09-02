export const applyMask = (value: string, mask?: 'cpf'): string => {
  if (!mask) return value;

  if (mask === 'cpf') {
    return value
      .replace(/\D/g, '')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d)/, '$1.$2')
      .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
  }

  return value;
};

export const formatCPF = (cpf: string): string => {
  return cpf.replace(/\D/g, '');
};

export const formatEmail = (email: string): string => {
  return email.trim().toLowerCase();
};
