import React from 'react';
import { Mail, Facebook, Twitter, MessageCircle, Phone, MapPin } from 'lucide-react';

interface ContactItemProps {
  icon: React.ReactNode;
  label: string;
}

const ContactItem: React.FC<ContactItemProps> = ({ icon, label }) => (
  <div className="flex items-center space-x-2 hover:text-blue-600 cursor-pointer transition-colors">
    {icon}
    <span>{label}</span>
  </div>
);

const Footer: React.FC = () => {
  const contactItems = [
    { icon: <Mail className="w-4 h-4" />, label: 'email' },
    { icon: <Facebook className="w-4 h-4" />, label: 'facebook' },
    { icon: <Twitter className="w-4 h-4" />, label: 'twitter' },
    { icon: <MessageCircle className="w-4 h-4" />, label: 'whatsapp MiTA' },
    { icon: <Phone className="w-4 h-4" />, label: 'hubungi kami' },
    { icon: <MapPin className="w-4 h-4" />, label: 'mandiri call 14000' }
  ];

  return (
    <footer className="bg-gray-100 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Headquarters</h4>
            <div className="text-sm text-gray-600 space-y-1">
              <p>Menara Mandiri</p>
              <p>Jenderal Sudirman Street Kav 54-55</p>
              <p>Jakarta 12190 Indonesia</p>
              <p>Phone: 14000, +62-21-52997777</p>
              <p>SWIFT Code: BMRIIDJA</p>
              <p className="mt-4">
                Bank Mandiri is licensed & supervised by the Financial Services Authority (OJK) & Bank Indonesia (BI).
              </p>
              <p>
                Bank Mandiri is a member of Indonesia Deposit Insurance Corporation (LPS). 
                The maximum deposit value guaranteed by LPS per customer per Bank is IDR 2 billion.
              </p>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-800 mb-4">Contact Us</h4>
            <div className="text-sm text-gray-600 space-y-2">
              {contactItems.map((item, index) => (
                <ContactItem key={index} {...item} />
              ))}
            </div>
          </div>
        </div>
        <div className="border-t border-gray-300 pt-6">
          <div className="bg-blue-800 text-white text-center py-3 rounded">
            <p className="text-sm">© 2025 PT Bank Mandiri (Persero) Tbk.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;