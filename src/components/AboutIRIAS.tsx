import React from 'react';
import { Building2, Users, Globe2 } from 'lucide-react';

const AboutIRIAS = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <div className="bg-blue-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4">About IRIAS</h1>
          <p className="text-xl text-blue-100">International Research Institute for Advanced Systems</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="prose prose-lg max-w-none">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Organization Overview</h2>
            <p className="text-gray-700 mb-6">
              The International Research Institute for Advanced Systems (IRIAS) was established as a non-profit 
              Intergovernmental Economic Organization during the Session of the Council for Mutual Economic 
              Assistance. The founding members included the governments of Bulgaria, Cuba, Poland, Hungary, 
              Mongolia, Czechoslovakia, GDR, and USSR.
            </p>
            <p className="text-gray-700 mb-6">
              Operating from 1976 to 1991 as an interstate organization, IRIAS is governed by the 1980 Budapest 
              Convention on legal status, privileges, and immunities of interstate economic organizations. This 
              Convention came into effect for IRIAS on October 30, 1988, and remains active today.
            </p>
          </div>

          {/* Current Leadership */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Current Leadership</h2>
            <div className="flex items-start space-x-4">
              <Building2 className="w-6 h-6 text-blue-600 mt-1" />
              <div>
                <p className="text-gray-700">
                  Currently, IRIAS is led by Director General Professor Mr. A.I. Ageev, who was appointed 
                  based on the Minutes of the XLVI meeting of the Council of IRIAS dated February 17, 2022.
                </p>
              </div>
            </div>
          </div>

          {/* Organizational Structure */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Organizational Structure</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Council of Participants</h3>
                  <p className="text-gray-700">
                    The highest governing body is the Council of Participants, comprising permanent 
                    representatives appointed by governmental authorities of member countries.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Globe2 className="w-6 h-6 text-blue-600 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Centers of Competence</h3>
                  <p className="text-gray-700">
                    IRIAS operates through approximately 40 scientific, technological, management, and 
                    information centers. These centers can be permanent or temporary, focusing on specific 
                    practical areas and funded by external customers. The centers collaborate with leading 
                    international experts from scientific, technological, and industrial organizations, 
                    bringing extensive experience in project implementation through to production stages.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutIRIAS;