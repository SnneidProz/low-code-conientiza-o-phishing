export const isValidPhone = (phone: string): boolean => {
  const strPhone = phone.replace(/[^\d]+/g, '');
  // Aceita 10 (Fixo) ou 11 (Celular) dígitos
  return strPhone.length === 10 || strPhone.length === 11;
};