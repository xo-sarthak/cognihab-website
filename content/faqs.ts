export type Faq = { q: string; /** answer HTML (may contain links) */ a: string };

export const FAQS: Record<string, Faq[]> = {
  "home": [
    {
      "q": "Which conditions does CogniHab support?",
      "a": "Rehabilitation after stroke, head injury, cerebral palsy, spinal cord injury, orthopaedic surgery and sports injury, plus balance and fall prevention for older adults; lazy eye (amblyopia) therapy and vision screening; and guided well-being for stress. Each has its own page: see <a href=\"/rehabilitation/\">Rehabilitation</a>, <a href=\"/vision/\">Vision</a> and <a href=\"/well-being/\">Well-being</a>."
    },
    {
      "q": "Can patients continue therapy at home?",
      "a": "Yes. The scans and the coached exercise library run on a phone alone, and lazy eye therapy and the well-being journeys run on lightweight mobile VR goggles. The clinic can see what was completed between visits."
    },
    {
      "q": "Is VR therapy safe?",
      "a": "Sessions are short, seated or standing on clear floor, voice-guided and supervised by the clinic. Vision screening indicates when to see an ophthalmologist; it is not a diagnosis. Read more in our guide: <a href=\"/blog/is-vr-therapy-safe-everything-you-need-to-know-before-starting/\">Is VR therapy safe?</a>"
    },
    {
      "q": "How much space do we need?",
      "a": "The headset programmes need a chair, or about two square metres of clear floor for standing tasks. The camera-based programmes need the phone on a stand about two metres from the person, with their whole body in frame and the floor between them clear."
    },
    {
      "q": "Does it need an internet connection?",
      "a": "Yes. An internet connection is required during sessions, so that results and reports reach the right account and the clinician can see what was completed."
    },
    {
      "q": "How many people can one headset serve in a day?",
      "a": "There is no fixed limit on the headset itself. A posture scan takes under two minutes, a vision screening under ten, a well-being journey eight to ten, and a lazy eye session about fifteen. The headset is wiped between people and handed on."
    },
    {
      "q": "How do we clean it between people?",
      "a": "Sanitation wipes are supplied with the kit. The headset face pad, the controllers and the goggles are wiped between users, which takes under a minute."
    },
    {
      "q": "Who can operate it, and how much training is needed?",
      "a": "Every programme is voice-guided from start to finish, so a trained assistant, care assistant or coach can run a session without a clinician in the room. CogniHab walks your team through the equipment at installation."
    },
    {
      "q": "What support comes with it?",
      "a": "Standard support during office hours after the sale, for both the software and the equipment, from the CogniHab team."
    },
    {
      "q": "Can more than one patient use the same headset?",
      "a": "Yes. Every user has their own login, so one headset holds many profiles and each person's sessions, scans and reports stay separate."
    }
  ],
  "rehabilitation": [
    {
      "q": "Who is CogniHab VR rehabilitation for?",
      "a": "Hospitals, neurological and spinal units, physiotherapy and occupational therapy departments, orthopaedic and sports clinics, senior care homes, fitness centres and home programmes supervised by a clinic."
    },
    {
      "q": "Can patients who cannot hold a controller use it?",
      "a": "Yes. The gamified tasks also work with bare-hand tracking, so a patient who cannot grip a controller can still train."
    },
    {
      "q": "Does it replace the physiotherapist?",
      "a": "No. The clinician reviews the scans and sets the programme. Voice guidance means a trained assistant can run the sessions, and the clinician sees every score."
    },
    {
      "q": "Can patients continue rehabilitation at home?",
      "a": "Yes. The two scans and the coached exercise library run on a mobile phone alone, with no headset, and the clinic can see what was completed and how well."
    },
    {
      "q": "How is progress measured?",
      "a": "Each task and repetition is scored, and the posture and joint movement scans are repeated against the first one, so range of motion is compared in degrees."
    },
    {
      "q": "What equipment is needed?",
      "a": "A Meta Quest headset for the gamified tasks, plus a phone on a stand for the exercise library and scans. The phone-only option needs just a phone and about two metres of clear floor."
    },
    {
      "q": "Is VR rehabilitation safe?",
      "a": "Sessions are short, can be done seated, and are prescribed and monitored by the clinic. Read our guide: <a href=\"/blog/is-vr-therapy-safe-everything-you-need-to-know-before-starting/\">Is VR therapy safe?</a>"
    }
  ],
  "vision": [
    {
      "q": "Is the VR vision screening a diagnosis?",
      "a": "No. It is a screening tool. Each result is either clear or a referral, and it indicates when an ophthalmologist should be consulted."
    },
    {
      "q": "What ages can use the lazy eye therapy?",
      "a": "The published CogniHab programme included patients from 5 to 35 years and above. The clinic decides who is suitable."
    },
    {
      "q": "Does it replace patching?",
      "a": "The clinic prescribes the programme and decides how it fits with other treatment. In the VR games both eyes stay open and are trained to work together."
    },
    {
      "q": "How long is each session?",
      "a": "Lazy eye therapy sessions take about 15 minutes. A vision screening takes under 10 minutes per person."
    },
    {
      "q": "Can lazy eye therapy continue at home?",
      "a": "Yes. The programme runs on lightweight VR goggles with a phone and a handheld remote, and the clinic can see whether sessions are completed."
    },
    {
      "q": "Who can run the vision screening?",
      "a": "A trained assistant or non-clinician. A voice guides the person through each check, so no clinician needs to be present."
    },
    {
      "q": "How many people can be screened in a day?",
      "a": "One screening takes under 10 minutes, so a school screening day can cover around a hundred children in a morning."
    },
    {
      "q": "Is CogniHab&#8217;s vision technology patented?",
      "a": "Yes. <a href=\"/patent/\">Indian Patent 575729</a>, granted on 12 December 2025, covers the immersive system and method for vision assessment and correction."
    }
  ],
  "well-being": [
    {
      "q": "Is this a treatment for anxiety or depression?",
      "a": "No. CogniHab well-being journeys are guided relaxation and mindfulness sessions, not medical treatment. The DASS check-in shows change over time; it is not a diagnosis. Anyone with ongoing symptoms should speak to a doctor or mental health professional."
    },
    {
      "q": "Do I need any meditation experience?",
      "a": "No. A voice guides every step, the person sits throughout, and nothing is asked beyond following along."
    },
    {
      "q": "How long is each session?",
      "a": "Each journey takes 8 to 10 minutes, and can be repeated as often as the day allows."
    },
    {
      "q": "What is the DASS check-in?",
      "a": "A short questionnaire inside the headset, based on the Depression Anxiety Stress Scales, taken before and after a programme so each person can see their own change."
    },
    {
      "q": "Can we use it in an office?",
      "a": "Yes. A headset and headphones in a quiet corner is enough: no booking, no instructor and no room to hire."
    },
    {
      "q": "Can I use it at home?",
      "a": "Yes. The same eleven journeys run on lightweight VR goggles that hold a mobile phone, plus headphones."
    },
    {
      "q": "Is VR meditation safe?",
      "a": "Sessions are short and taken seated. People who feel unwell in VR can stop at any time. Read our guide: <a href=\"/blog/is-vr-therapy-safe-everything-you-need-to-know-before-starting/\">Is VR therapy safe?</a>"
    }
  ],
  "about-us": [
    {
      "q": "What does CogniHab do?",
      "a": "CogniHab builds VR digital therapeutics: VR rehabilitation, VR vision therapy and screening, and guided VR well-being, all on one headset, with every session scored and reported."
    },
    {
      "q": "Where is CogniHab based?",
      "a": "Our headquarters is in Jaipur, Rajasthan, India, and we have an office in Lewes, Delaware, United States."
    },
    {
      "q": "Is CogniHab&#8217;s technology patented?",
      "a": "Yes. <a href=\"/patent/\">Indian Patent 575729</a>, granted on 12 December 2025, covers our immersive system and method for vision assessment and correction."
    },
    {
      "q": "Is there published research?",
      "a": "Yes. Our lazy eye programme was published in the <i>Indian Journal of Community Health</i> in 2023. <a href=\"/research/\">Read the research</a>."
    },
    {
      "q": "Who uses CogniHab?",
      "a": "Hospitals, rehabilitation and physiotherapy centres, eye clinics, employers, senior care homes, government health programmes, fitness centres, schools and individuals at home."
    }
  ]
};
