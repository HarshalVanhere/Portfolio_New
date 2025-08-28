import profileImgLarge from '~/assets/profile-large.jpg';
import profileImgPlaceholder from '~/assets/profile-placeholder.jpg';
import profileImg from '~/assets/profile.jpg';
import { Button } from '~/components/button';
import { DecoderText } from '~/components/decoder-text';
import { Divider } from '~/components/divider';
import { Heading } from '~/components/heading';
import { Image } from '~/components/image';
import { Link } from '~/components/link';
import { Section } from '~/components/section';
import { Text } from '~/components/text';
import { Transition } from '~/components/transition';
import { Fragment, useState } from 'react';
import { media } from '~/utils/style';
import katakana from './katakana.svg';
import styles from './profile.module.css';

const ProfileText = ({ visible, titleId }) => (
  <Fragment>
    <Heading className={styles.title} data-visible={visible} level={3} id={titleId}>
      <DecoderText text="Harshal Vanhere" start={visible} delay={500} />
    </Heading>
    <Text className={styles.description} data-visible={visible} size="l" as="div">
      <strong>👤 Personal Information</strong><br />
      Name: Harshal Vanhere<br />
      Address: Musalgoan MIDC, Tal.- Sinnar, Dist.- Nashik, India<br />
      Phone: +91 8551019235<br />
      Email: <Link href="mailto:harshalvanhere@gmail.com">harshalvanhere@gmail.com</Link><br />
      LinkedIn: <Link href="https://linkedin.com/in/harshalvanhere">linkedin.com/in/harshalvanhere</Link><br />
      GitHub: <Link href="https://github.com/harshalvanhere">github.com/harshalvanhere</Link><br />
      Portfolio Website: <Link href="https://www.harshalvanhere.online">harshalvanhere.online</Link>
      <br /><br />
      <strong>🎯 Objective</strong><br />
      Enthusiastic Electronics and Computer Engineering graduate aiming to contribute to innovative software and system solutions by leveraging skills in programming, IoT, and automation within a dynamic tech environment.
      <br /><br />
      <strong>🎓 Education</strong><br />
      M.Tech in Digital System (Pursuing, Batch of 2027) – Sanjivani College of Engineering, Kopargaon<br />
      B.Tech in Electronics and Computer Engineering – Sanjivani College of Engineering, Kopargaon (CGPA: 7.23)<br />
      Higher Secondary (HSC) – GMD Arts BW Commerce and Science College, Sinnar (71.83%)<br />
      Secondary School (SSC) – S. G. Public School, Sinnar (83.40%)
      <br /><br />
      <strong>🛠️ Skills</strong><br />
      Soft Skills: Problem Solving, Time Management, Leadership, Critical Thinking, Creativity<br />
      Programming & Tech: C, Python, JavaScript, HTML, CSS, Bash/Shell Scripting, SCADA<br />
      IoT & Embedded Systems: Arduino, Raspberry Pi, NodeMCU, ESP32, Sensors, Actuators, BLE, Wi-Fi Modules, IoT, IIoT, HMI<br />
      Graphic Design & UI/UX: Adobe Photoshop, Illustrator, Adobe XD, Figma, Canva, UI/UX Prototyping, Branding Design<br />
      Developer Tools: Git & GitHub, VS Code, Arduino IDE, MS Office Suite
      <br /><br />
      <strong>📂 Projects</strong><br />
      <u>CampusCast – Smart Display Network System</u><br />
      Centralized platform to manage LED displays/TVs from one dashboard<br />
      Replaced manual USB updates with network distribution<br />
      Enabled scheduling of multimedia content & auto-presentation mode<br />
      <u>TechLab – Smart Lab Automation</u><br />
      Automated lab equipment with Arduino & NodeMCU<br />
      Designed interactive UI with HTML, CSS, Adobe XD<br />
      Improved safety & accessibility via remote controls<br />
      <u>Rajomukti – Smart Sanitary Pad Vending Machine</u><br />
      UPI-enabled vending solution for women’s hygiene<br />
      Custom microcontroller logic for dispensing & sensors<br />
      Built touchscreen UI (HTML, CSS, JS)<br />
      <u>InfoGlow – Scrolling LED Display</u><br />
      WiFi-controlled real-time announcement display<br />
      Arduino-based wireless content updates<br />
      <u>Boardly – IoT Digital Notice System</u><br />
      Raspberry Pi-based responsive digital notice board<br />
      Real-time updates via HTML, CSS, JS frontend
      <br /><br />
      <strong>📑 Publications</strong><br />
      <u>TechLab: Revolutionizing Lighting Automation Through IoT and NodeMCU</u><br />
      Springer, December 2024<br />
      Research on IoT-based lighting automation<br />
      Prototype for real-time energy-efficient lighting control
      <br /><br />
      <strong>💼 Experience</strong><br />
      <u>Digital Content Creator – Sanjivani Group of Institutes (Mar 2023 – May 2024)</u><br />
      Designed Sanjivani University official logo<br />
      Delivered 500+ digital designs (banners, posters, campaigns)<br />
      Enhanced online presence with content strategy<br />
      <u>Intern – Alumni Relations, Student Alumni Relation Cell, SCOE (Aug 2022 – May 2024)</u><br />
      Head of Digital Content, Marketing & Technical team<br />
      Designed alumni meet materials, flex banners<br />
      Managed technical event operations & promotions
      <br /><br />
      <strong>🎖 Extracurricular</strong><br />
      Founder, Team Charlie, Dept. of Electronics & Computer Engg.<br />
      Incharge, Technical Team, Student Activity Council (2023)<br />
      Incharge, Photography Team, Student Activity Council (2022)
      <br /><br />
      <strong>📜 Certifications</strong><br />
      Journey to Cloud: Envisioning Your Solution (IBM)<br />
      Getting Started with Enterprise Data Science (IBM)<br />
      Get Started with Figma (Coursera)<br />
      Project Management (NPTEL)<br />
      Organizational Behaviour (NPTEL)<br />
      E-Business (NPTEL)
      <br /><br />
      <strong>🌐 Languages</strong><br />
      English – Full Professional Proficiency<br />
      Hindi – Native<br />
      Marathi – Native<br />
      Japanese – Pursuing JLPT N4 (Basic reading, writing, conversation)
    </Text>
  </Fragment>
);

export const Profile = ({ id, visible, sectionRef }) => {
  const [focused, setFocused] = useState(false);
  const titleId = `${id}-title`;

  return (
    <Section
      className={styles.profile}
      onFocus={() => setFocused(true)}
      onBlur={() => setFocused(false)}
      as="section"
      id={id}
      ref={sectionRef}
      aria-labelledby={titleId}
      tabIndex={-1}
    >
      <Transition in={visible || focused} timeout={0}>
        {({ visible, nodeRef }) => (
          <div className={styles.content} ref={nodeRef}>
            <div className={styles.column}>
              <ProfileText visible={visible} titleId={titleId} />
              <Button
                secondary
                className={styles.button}
                data-visible={visible}
                href="/contact"
                icon="send"
              >
                Send me a message
              </Button>
            </div>
            <div className={styles.column}>
              <div className={styles.tag} aria-hidden>
                <Divider
                  notchWidth="64px"
                  notchHeight="8px"
                  collapsed={!visible}
                  collapseDelay={1000}
                />
                <div className={styles.tagText} data-visible={visible}>
                  About me
                </div>
              </div>
              <div className={styles.image}>
                <Image
                  reveal
                  delay={100}
                  placeholder={profileImgPlaceholder}
                  srcSet={`${profileImg} 480w, ${profileImgLarge} 960w`}
                  width={960}
                  height={1280}
                  sizes={`(max-width: ${media.mobile}px) 100vw, 480px`}
                  alt="Me smiling like a goofball at the Qwilr office in Sydney"
                />
                <svg className={styles.svg} data-visible={visible} viewBox="0 0 136 766">
                  <use href={`${katakana}#katakana-profile`} />
                </svg>
              </div>
            </div>
          </div>
        )}
      </Transition>
    </Section>
  );
};
