import { Bell, Lock, User, } from 'lucide-react';

export const SettingsPage = () => {
    const sections = [
        {
            title: 'Profile Settings',
            icon: User,
            settings: [
                { name: 'Update Profile Information', description: 'Change your name, email, and profile picture' },
                { name: 'Change Password', description: 'Update your password for better security' }
            ]
        },
        {
            title: 'Notifications',
            icon: Bell,
            settings: [
                { name: 'Email Notifications', description: 'Configure email notification preferences' },
                { name: 'Push Notifications', description: 'Manage push notification settings' }
            ]
        },
        {
            title: 'Privacy',
            icon: Lock,
            settings: [
                { name: 'Privacy Options', description: 'Control your privacy settings and data sharing' },
                { name: 'Two-Factor Authentication', description: 'Enable additional security for your account' }
            ]
        }
    ];

    return (
        <section className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="container mx-auto border shadow-md rounded-xl p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Settings</h1>
                </div>

                <div className="space-y-6">
                    {sections.map((section) => {
                        const Icon = section.icon;
                        return (
                            <div key={section.title} className="bg-white rounded-xl shadow-sm p-6">
                                <div className="flex items-center space-x-3 mb-4">
                                    <Icon className="w-6 h-6 text-blue-600" />
                                    <h2 className="text-lg font-semibold text-gray-900">{section.title}</h2>
                                </div>

                                <div className="space-y-4">
                                    {section.settings.map((setting) => (
                                        <div
                                            key={setting.name}
                                            className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-lg cursor-pointer"
                                        >
                                            <div>
                                                <h3 className="text-sm font-medium text-gray-900">{setting.name}</h3>
                                                <p className="text-sm text-gray-500">{setting.description}</p>
                                            </div>
                                            <button className="px-4 py-2 text-sm text-blue-600 hover:bg-blue-50 rounded-lg">
                                                Configure
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>          
        </section>
    );
};
