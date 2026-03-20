export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface VisaType {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

export interface PaymentOption {
  id: string;
  title: string;
  price: string;
  description: string;
  features: string[];
  popular?: boolean;
}

export interface Office {
  city: string;
  address: string;
  phone: string;
  email: string;
  map: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}