import { Button } from '@/components/ui/button';
import { Mail, Phone, MapPin } from 'lucide-react';

export const TeamPage = () => {
    const team = [
        {
            id: '1',
            name: 'Sarah Wilson',
            role: 'Lead Developer',
            email: 'sarah.wilson@example.com',
            phone: '+57 3212345673',
            location: 'Colombia, Medellin',
            avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        },
        {
            id: '2',
            name: 'Michael Chen',
            role: 'Frontend Developer',
            email: 'michael.chen@example.com',
            phone: '+51 923456378',
            location: 'Peru, Lima',
            avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
        }
    ];

    return (
        <section className="flex-1 space-y-4 p-4 md:p-8 pt-6">
            <div className="container mx-auto border shadow-md rounded-xl p-4">
                <div className="flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Miembros del Equipo</h1>
                    <Button className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700">
                        Agregar nuevo miembro
                    </Button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {team.map((member) => (
                        <div key={member.id} className="bg-white rounded-xl shadow-sm p-6">
                            <div className="flex items-center space-x-4">
                                <img
                                    src={member.avatar}
                                    alt={member.name}
                                    className="w-16 h-16 rounded-full"
                                />
                                <div>
                                    <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                                    <p className="text-sm text-gray-500">{member.role}</p>
                                </div>
                            </div>

                            <div className="mt-6 space-y-4">
                                <div className="flex items-center text-sm text-gray-600">
                                    <Mail className="w-4 h-4 mr-2" />
                                    {member.email}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <Phone className="w-4 h-4 mr-2" />
                                    {member.phone}
                                </div>
                                <div className="flex items-center text-sm text-gray-600">
                                    <MapPin className="w-4 h-4 mr-2" />
                                    {member.location}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};
