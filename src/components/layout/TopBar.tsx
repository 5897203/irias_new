import { Globe2, Mail } from 'lucide-react';

export function TopBar() {
  return (
    <div className="bg-[#1e3a8a] text-white px-4 py-2 flex justify-between items-center">
      <span className="text-sm">INTERNATIONAL RESEARCH INSTITUTE FOR ADVANCED SYSTEMS</span>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Globe2 size={16} />
          <select className="bg-transparent border-none text-sm focus:outline-none">
            <option value="en">English</option>
            <option value="ru">Русский</option>
          </select>
        </div>
        <Mail size={16} className="cursor-pointer hover:text-blue-200" />
      </div>
    </div>
  );
}