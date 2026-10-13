export type Programme = "rehabilitation" | "vision" | "well-being";
export type UseCase = { slug: string; title: string; subtitle: string; summary: string; does: string; addresses: string[];
  buys: string; needed: string; cls: string; imCls: string; img: string; alt: string };

export const PROGRAMMES: Record<Programme, { name: string; long: string }> = {
  rehabilitation: { name: "Rehabilitation", long: "VR rehabilitation" },
  vision: { name: "Vision care", long: "VR vision therapy" },
  "well-being": { name: "Well-being", long: "VR well-being" },
};

export const USE_CASES: Record<Programme, UseCase[]> = {
  "rehabilitation": [
    {
      "slug": "stroke-neurological-rehabilitation",
      "title": "Stroke & Neurological Rehabilitation",
      "subtitle": "Relearning grip, reach and everyday actions.",
      "summary": "Interactive rehabilitation tasks help patients practise reaching, grip, coordination and activities of daily living. Each task is scored to help therapists track performance.",
      "does": "Patients work through interactive tasks using controllers or bare hands. Tasks include holding a spoon, drinking water, brushing teeth, opening a drawer and other everyday actions. Each task is scored automatically.",
      "addresses": [
        "Stroke rehabilitation",
        "Head injury recovery",
        "Cerebral palsy rehabilitation",
        "Upper limb rehabilitation",
        "Grip and reach training",
        "Activities of daily living"
      ],
      "buys": "Hospitals, neurological rehabilitation units and occupational therapy departments.",
      "needed": "Meta Quest headset with controllers or bare-hand tracking. No phone is required for this use case.",
      "cls": "uc fc",
      "imCls": "im",
      "img": "/images/rehab-uc-stroke.jpg",
      "alt": "An older man in a VR headset raises his bare hands at a table while an occupational therapist watches"
    },
    {
      "slug": "orthopaedic-post-surgical-recovery",
      "title": "Orthopaedic & Post-Surgical Rehabilitation",
      "subtitle": "Guided exercises with measurable movement and form tracking.",
      "summary": "CogniHab combines guided exercises, movement assessment and camera-based form checking to support structured recovery after orthopaedic injury or surgery.",
      "does": "A baseline assessment can be used to build a rehabilitation programme. The phone camera checks exercise form during repetitions, while repeat assessments help show changes in movement over time.",
      "addresses": [
        "Post-surgical rehabilitation",
        "Joint stiffness",
        "Reduced range of motion",
        "Strength and mobility",
        "Guided physiotherapy exercises"
      ],
      "buys": "Orthopaedic hospitals, physiotherapy centres and surgeons’ clinics.",
      "needed": "Meta Quest headset with a phone, or phone alone for scans and exercises.",
      "cls": "uc fc",
      "imCls": "im",
      "img": "/images/rehab-uc-ortho.jpg",
      "alt": "A young woman with a knee brace does a mini-squat holding a chair, facing a phone on a tripod"
    },
    {
      "slug": "spinal-injury-rehabilitation",
      "title": "Spinal Cord Injury Rehabilitation",
      "subtitle": "Structured rehabilitation for different levels of mobility.",
      "summary": "Guided exercises support assisted, passive, seated, core and spine movements for patients with limited mobility.",
      "does": "Patients work through exercises selected for their movement ability. Programmes can include assisted and passive exercises, seated activities, core and spine work, and separate left- and right-side movements. Activity is recorded and scored during the session.",
      "addresses": [
        "Spinal cord injury rehabilitation",
        "Limited mobility",
        "Assisted exercises",
        "Passive exercises",
        "Core and spine movement",
        "Asymmetric movement"
      ],
      "buys": "Spinal injury units and long-term rehabilitation centres.",
      "needed": "Meta Quest headset with a phone. Many exercises can be performed in a seated position.",
      "cls": "uc fc",
      "imCls": "im",
      "img": "/images/rehab-uc-spinal.jpg",
      "alt": "A man in a wheelchair wearing a VR headset raises both arms while a therapist stands behind him"
    },
    {
      "slug": "senior-care-fall-prevention",
      "title": "Senior Care & Fall Prevention",
      "subtitle": "Guided rehabilitation for balance, strength and mobility.",
      "summary": "Guided exercises, posture analysis and movement tracking support mobility and balance programmes for older adults.",
      "does": "Patients can complete guided exercises using a phone camera alone or a headset and phone. Posture scans help track changes in physical function over time.",
      "addresses": [
        "Age-related weakness",
        "Balance and mobility",
        "Fall prevention",
        "Strength and conditioning",
        "Body awareness"
      ],
      "buys": "Senior care homes, geriatric clinics and home care providers.",
      "needed": "Phone alone or Meta Quest headset with a phone.",
      "cls": "uc fc",
      "imCls": "im hi",
      "img": "/images/rehab-uc-senior.jpg",
      "alt": "An elderly woman holds the back of a chair for a heel raise in a care home lounge while a care assistant watches"
    },
    {
      "slug": "sports-rehabilitation-fitness",
      "title": "Sports Rehabilitation & Fitness",
      "subtitle": "Measured movement, guided exercises and structured recovery.",
      "summary": "Range of motion assessment, guided exercises and camera-based form checking support sports rehabilitation and fitness programmes.",
      "does": "Joint movements can be measured at intervals, while guided exercises support strength, mobility and movement training. The camera can check exercise form during repetitions.",
      "addresses": [
        "Sports injury rehabilitation",
        "Range of motion assessment",
        "Strength and mobility",
        "Movement assessment",
        "Return-to-activity programmes",
        "Day-to-day fitness"
      ],
      "buys": "Sports clinics, academies, physiotherapists, fitness centres and individuals at home.",
      "needed": "Meta Quest headset with a phone, or phone alone for scans and exercises.",
      "cls": "uc fc",
      "imCls": "im",
      "img": "/images/rehab-uc-sports.jpg",
      "alt": "A young athlete balances on one leg facing a phone on a tripod while a physiotherapist takes notes"
    }
  ],
  "vision": [
    {
      "slug": "lazy-eye-therapy",
      "title": "Lazy Eye Therapy in the Clinic",
      "subtitle": "VR vision therapy for structured lazy eye treatment.",
      "summary": "Children complete short interactive sessions across 11 therapy games, while the clinic prescribes the programme and tracks session completion.",
      "does": "The clinic prescribes the programme and the child completes around 15-minute sessions across 11 therapy games and 3 training modes. The clinic can track whether sessions are being completed between visits.",
      "addresses": [
        "Lazy eye / amblyopia",
        "Vision therapy",
        "Eye coordination",
        "Structured therapy sessions"
      ],
      "buys": "Eye clinics, paediatric ophthalmology departments and optometry practices.",
      "needed": "Meta Quest headset with controllers in the clinic. At home, lightweight VR goggles with a mobile phone and handheld remote.",
      "cls": "uc v fc",
      "imCls": "im",
      "img": "/images/vision-uc-clinic.jpg",
      "alt": "A girl in a VR headset holds two controllers while an optometrist in a white coat sits across from her"
    },
    {
      "slug": "vision-screening",
      "title": "Vision Screening in Clinics & Workplaces",
      "subtitle": "A guided VR eye test in under ten minutes.",
      "summary": "Six vision checks are completed in sequence, with each result shown as clear or refer.",
      "does": "A trained assistant guides the person through six vision checks inside the headset. A detailed screening report is available at the end, showing which results are clear and which require referral.",
      "addresses": [
        "Visual acuity",
        "Contrast sensitivity",
        "Depth perception",
        "Eye coordination",
        "Colour vision",
        "Near focusing"
      ],
      "buys": "Eye clinics, hospitals, primary care networks and employers.",
      "needed": "Meta Quest headset and a trained assistant. Screening indicates when an ophthalmologist should be consulted and is not a diagnosis.",
      "cls": "uc v fc",
      "imCls": "im",
      "img": "/images/vision-uc-workplace.jpg",
      "alt": "An employee in a shirt and tie sits in a VR headset in an office meeting room beside a clinic assistant"
    },
    {
      "slug": "school-community-screening",
      "title": "School & Community Vision Screening",
      "subtitle": "Screen groups and leave with a referral list.",
      "summary": "The guided screening can be run by a trained assistant for school and community programmes, helping identify people who should consult an ophthalmologist.",
      "does": "The same six checks can be used during school and community screening programmes. A trained non-clinician can run the screening, with results available at the end to identify people requiring ophthalmologist follow-up.",
      "addresses": [
        "School-age vision screening",
        "Community screening",
        "Population screening",
        "Undetected vision problems",
        "Ophthalmologist referral"
      ],
      "buys": "Government health programmes, non-governmental organisations and school networks.",
      "needed": "Meta Quest headset, a chair and an internet connection. A trained assistant runs the screening.",
      "cls": "uc v fc",
      "imCls": "im",
      "img": "/images/vision-screening-school.jpg",
      "alt": "A row of schoolchildren in uniform wait on chairs while the nearest child wears a VR headset"
    }
  ],
  "well-being": [
    {
      "slug": "workplace-wellbeing",
      "title": "Workplace Well-being",
      "subtitle": "Ten quiet minutes, without leaving the building.",
      "summary": "A short reset during the working day, with a DASS check-in and posture scans for desk workers. Nothing to book and no instructor needed.",
      "does": "Journeys are used as a short reset during the working day, with a DASS check-in at the start and posture scans for desk workers. Nothing to book and no instructor is needed.",
      "addresses": [
        "Workplace stress",
        "Day-to-day mindfulness",
        "Postural strain from desk work"
      ],
      "buys": "Employers, human resources teams and occupational health providers.",
      "needed": "Headset and headphones. A quiet corner and a chair.",
      "cls": "uc m fc",
      "imCls": "im",
      "img": "/images/home-session-mind.jpg",
      "alt": "An office worker relaxes in an armchair wearing a VR headset and headphones in a quiet corner of the office"
    },
    {
      "slug": "care-settings",
      "title": "Well-being in Care Settings",
      "subtitle": "The same journeys, used on the ward.",
      "summary": "The guided journeys can be used to settle patients before a procedure, between therapy sessions or as quiet time in a care home. Sessions are taken seated and require no prior experience.",
      "does": "Used to settle patients before a procedure, between therapy sessions or as quiet time in a care home. Taken seated, with no experience needed.",
      "addresses": [
        "Anxiety before procedures",
        "Long waits between therapy sessions",
        "Quiet time in residential care"
      ],
      "buys": "Hospitals, senior care homes and rehabilitation centres.",
      "needed": "Headset and headphones.",
      "cls": "uc m fc",
      "imCls": "im",
      "img": "/images/wellbeing-ward.jpg",
      "alt": "An elderly man sits in a high-backed chair wearing a VR headset and headphones in a bright hospital day room"
    },
    {
      "slug": "at-home",
      "title": "At Home",
      "subtitle": "A daily practice that fits in a drawer.",
      "summary": "The 11 guided journeys can be used at home through lightweight VR goggles and a phone, giving individuals and families access to guided well-being sessions.",
      "does": "Provides access to the 11 guided journeys through lightweight mobile VR goggles and a phone. Sessions are seated and designed for regular home use.",
      "addresses": [
        "Daily relaxation practice",
        "Guided mindfulness",
        "Stress relief"
      ],
      "buys": "Individuals and families.",
      "needed": "Lightweight VR goggles that hold a mobile phone.",
      "cls": "uc m fc",
      "imCls": "im",
      "img": "/images/wellbeing-home.jpg",
      "alt": "A young woman sits cross-legged on a sofa at home wearing mobile VR goggles and earbuds"
    }
  ]
};
