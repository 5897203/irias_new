import { Building2, Users, Globe2 } from 'lucide-react';

export default function AboutIRIAS() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-[#1e3a8a] text-white py-24">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-800 mix-blend-multiply" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About IRIAS</h1>
          <p className="text-xl text-blue-100 max-w-3xl">
            International Research Institute for Advanced Systems
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid gap-12">
          {/* History Section */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Establishment & History</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The International Research Institute for Advanced Systems (IRIAS) was established as a non-profit 
              Intergovernmental Economic Organization during the Session of the Council for Mutual Economic 
              Assistance. The founding members included the governments of Bulgaria, Cuba, Poland, Hungary, 
              Mongolia, Czechoslovakia, GDR, and USSR.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Operating from 1976 to 1991 as an interstate organization, IRIAS is governed by the 1980 Budapest 
              Convention on legal status, privileges, and immunities of interstate economic organizations. This 
              Convention came into effect for IRIAS on October 30, 1988, and remains active today.
            </p>
          </section>

          {/* Current Leadership */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-start gap-4">
              <Building2 className="w-8 h-8 text-blue-600 flex-shrink-0" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Leadership</h2>
                <p className="text-gray-700 leading-relaxed">
                  Currently, IRIAS is led by Director General Professor Mr. A.I. Ageev, who was appointed 
                  based on the Minutes of the XLVI meeting of the Council of IRIAS dated February 17, 2022.
                </p>
              </div>
            </div>
          </section>

          {/* Organizational Structure */}
          <section className="bg-white rounded-2xl shadow-lg p-8">
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <Users className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Council of Participants</h2>
                  <p className="text-gray-700 leading-relaxed">
                    The highest governing body is the Council of Participants, comprising permanent 
                    representatives appointed by governmental authorities of member countries.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Globe2 className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">Centers of Competence</h2>
                  <p className="text-gray-700 leading-relaxed">
                    IRIAS operates through approximately 40 scientific, technological, management, and 
                    information centers. These centers can be permanent or temporary, focusing on specific 
                    practical areas and funded by external customers. The centers collaborate with leading 
                    international experts from scientific, technological, and industrial organizations, 
                    bringing extensive experience in project implementation through to production stages.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}