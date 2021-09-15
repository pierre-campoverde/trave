import React, { useState } from "react";
import UniveristyBanner from "../Components/Organisms/University Profile/UniveristyBanner";
import UniversityProfileTemplate from "../Components/Templates/UniversityProfileTemplate";
const UniversityProfile = ({match}) => {
  const { universityId } = match.params;
  return (
    <main className="min-h-screen">
      <UniversityProfileTemplate universityId={universityId}/>
    </main>
  );
};

export default UniversityProfile;
