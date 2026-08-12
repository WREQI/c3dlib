import { useState } from 'react';
import { toast } from 'sonner';
import {
  User,
  Lock,
  Bell,
  Palette,
  CreditCard,
  Receipt,
  Key,
  Camera,
  Save,
  Settings,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ACCOUNT_MENU_ITEMS } from '@/data/cad';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  User,
  Lock,
  Bell,
  Palette,
  CreditCard,
  Receipt,
  Key,
};

export default function CadAccountPage() {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    firstName: 'Kevin',
    lastName: 'Smith',
    email: 'kevin.smith@example.com',
    company: 'Acme Engineering',
    title: 'Senior Mechanical Engineer',
  });

  const handleSave = () => {
    toast.success('Profile updated successfully');
  };

  return (
    <div className="flex h-full min-h-0 flex-col bg-white">
      {/* Page header */}
      <div className="flex h-10 items-center gap-2 border-b border-[#e0e0e0] bg-white px-4">
        <Settings className="h-4 w-4 text-[#1a73e8]" />
        <span className="text-sm font-medium text-[#333]">My account</span>
      </div>

      <div className="flex min-h-0 flex-1">
        {/* Left nav */}
        <aside className="w-48 shrink-0 border-r border-[#e0e0e0] bg-[#f8f9fa] py-2">
          {ACCOUNT_MENU_ITEMS.map((item) => {
            const Icon = ICON_MAP[item.icon] || User;
            const active = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex h-8 w-full items-center gap-2 px-3 text-left text-xs transition-colors ${
                  active
                    ? 'bg-[#e8f0fe] text-[#1a73e8] font-medium'
                    : 'text-[#333] hover:bg-[#e8eaed]'
                }`}
              >
                <Icon className="h-3.5 w-3.5" />
                {item.label}
              </button>
            );
          })}
        </aside>

        {/* Right content */}
        <div className="flex-1 overflow-y-auto p-6">
          {activeTab === 'profile' && (
            <div className="mx-auto max-w-lg">
              <h2 className="mb-4 text-lg font-medium text-[#333]">Personal Information</h2>

              {/* Avatar section */}
              <div className="mb-6 flex items-center gap-4">
                <Avatar className="h-20 w-20 bg-[#1a73e8]">
                  <AvatarFallback className="text-2xl font-medium text-white">
                    KS
                  </AvatarFallback>
                </Avatar>
                <div>
                  <div className="mb-1 text-sm font-medium text-[#333]">Profile photo</div>
                  <div className="flex gap-2">
                    <Button
                      size="sm"
                      variant="outline"
                      className="h-7 border-[#dadce0] text-xs text-[#1a73e8] hover:bg-[#e8f0fe]"
                      onClick={() => toast.info('Upload photo')}
                    >
                      <Camera className="mr-1.5 h-3 w-3" />
                      Upload
                    </Button>
                    <Button
                      size="sm"
                      variant="ghost"
                      className="h-7 text-xs text-[#d93025] hover:bg-[#fce8e6] hover:text-[#c5221f]"
                      onClick={() => toast.info('Photo removed')}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>

              {/* Form fields */}
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-1 block text-[11px] font-medium text-[#5f6368]">
                      First name
                    </Label>
                    <Input
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="h-8 text-xs"
                    />
                  </div>
                  <div>
                    <Label className="mb-1 block text-[11px] font-medium text-[#5f6368]">
                      Last name
                    </Label>
                    <Input
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="h-8 text-xs"
                    />
                  </div>
                </div>

                <div>
                  <Label className="mb-1 block text-[11px] font-medium text-[#5f6368]">
                    Email
                  </Label>
                  <Input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-8 text-xs"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label className="mb-1 block text-[11px] font-medium text-[#5f6368]">
                      Company
                    </Label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="h-8 text-xs"
                    />
                  </div>
                  <div>
                    <Label className="mb-1 block text-[11px] font-medium text-[#5f6368]">
                      Job title
                    </Label>
                    <Input
                      value={formData.title}
                      onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                      className="h-8 text-xs"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <Button
                  onClick={handleSave}
                  className="h-8 bg-[#1a73e8] px-4 text-xs font-medium text-white hover:bg-[#1557b0]"
                >
                  <Save className="mr-1.5 h-3 w-3" />
                  Save changes
                </Button>
                <Button
                  variant="outline"
                  className="h-8 border-[#dadce0] px-4 text-xs text-[#5f6368] hover:bg-[#f8f9fa]"
                  onClick={() => toast.info('Reset')}
                >
                  Cancel
                </Button>
              </div>
            </div>
          )}

          {activeTab !== 'profile' && (
            <div className="mx-auto flex h-64 max-w-lg flex-col items-center justify-center text-center">
              <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f0fe]">
                {(() => {
                  const Icon = ICON_MAP[ACCOUNT_MENU_ITEMS.find((i) => i.id === activeTab)?.icon || 'User'] || User;
                  return <Icon className="h-6 w-6 text-[#1a73e8]" />;
                })()}
              </div>
              <div className="text-sm font-medium text-[#333]">
                {ACCOUNT_MENU_ITEMS.find((i) => i.id === activeTab)?.label}
              </div>
              <div className="mt-1 text-xs text-[#5f6368]">
                Settings for this section are coming soon.
              </div>
              <Button
                size="sm"
                className="mt-4 h-7 bg-[#1a73e8] text-xs hover:bg-[#1557b0]"
                onClick={() => toast.info('This feature is in development')}
              >
                Learn more
              </Button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
