import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import aboutImage from '../assets/about-image.png';
import whoWeAreImage from '../assets/images/who-we-are-about.png';
import founderImage from '../assets/dinesh-bhalawala.png';
import member0 from '../assets/team/member0.png';
import member1 from '../assets/team/member1.png';
import member2 from '../assets/team/member2.png';
import member3 from '../assets/team/member3.png';
import member4 from '../assets/team/member4.png';

const About = () => {
    return (
        <div className="min-h-screen">
            <PageHeader
                title="About Urmi Financial Services"
                subtitle="Your trusted partner in building a secure and prosperous financial future"
                image={aboutImage}
                badge="AMFI Registered | MSME Certified"
            />

            {/* Who We Are */}
            <section className="py-16 bg-white md:py-24">
                <div className="section-container">
                    <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, x: -50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="order-1 lg:order-1"
                        >
                            <img
                                src={whoWeAreImage}
                                alt="Urmi Financial Services - Your Trusted Financial Companion"
                                className="w-full h-auto rounded-2xl shadow-soft-lg"
                            />
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="space-y-6"
                        >
                            <h2 className="text-3xl font-bold md:text-4xl text-neutral-900">
                                Who We Are
                            </h2>
                            <p className="text-lg leading-relaxed text-neutral-600">
                                Welcome to Urmi Financial Services Pvt Ltd, your trusted financial companion in India. We understand that your financial journey is more than just numbers; it's a story of dreams, aspirations, and the legacy you want to leave behind.
                            </p>
                            <p className="text-lg leading-relaxed text-neutral-600">
                                At Urmi Financial Services Pvt Ltd, we are driven by the belief that everyone deserves a secure and prosperous future. We are India's 1st Certified Financial Guardian Company, Financial Services & Training Enterprise, and also registered as Micro & Small Medium Enterprise – MSME under Govt. of India.
                            </p>
                            <p className="text-lg leading-relaxed text-neutral-600">
                                Our team of experienced Mutual Fund Distribution professionals is committed to providing personalized, unbiased guidance that puts your interests first. We take pride in building long-term relationships with our clients, guiding them through every stage of their financial journey.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Founder Section */}
            <section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 to-accent-green/5">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl text-neutral-900">
                            Meet Our Founder
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-neutral-600">
                            Leading with expertise, integrity, and a vision for your financial success
                        </p>
                    </motion.div>

                    <div className="max-w-5xl mx-auto">
                        <div className="grid items-center grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-12">
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="lg:col-span-2"
                            >
                                <div>
                                    <img
                                        src={founderImage}
                                        alt="Mr. Dinesh Bhalawala - Founder & Director"
                                        className="w-full h-auto rounded-2xl shadow-soft-xl"
                                    />
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                className="space-y-6 lg:col-span-3"
                            >
                                <div>
                                    <h3 className="mb-2 text-3xl font-bold text-neutral-900">
                                        Mr. Dinesh Bhalawala
                                    </h3>
                                    <p className="mb-4 text-xl font-semibold text-primary">
                                        Founder & Director of Urmi Investment
                                    </p>
                                </div>

                                <div className="space-y-4 leading-relaxed text-neutral-600">
                                    <p>
                                        Mr. Dinesh Bhalawala pursued his Masters in Commerce, following which he completed a certificate course in Information Technology, along with further training in personal finance and estate management.
                                    </p>
                                    <p>
                                        Since then, he has registered IFA with the Association of Mutual Funds in India and with the Insurance Regulation and Development Authority (IRDA).
                                    </p>
                                </div>

                                {/* TEMPORARILY REMOVED — restore this exact block when AMC names can be shown again
                                <div className="p-6 bg-white rounded-xl shadow-soft">
                                    <h4 className="mb-3 text-lg font-bold text-neutral-900">Key Partnerships</h4>
                                    <ul className="space-y-2 text-neutral-600">
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Gold Partner with ICICI Prudential Mutual Fund</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Star Key Partner with HDFC Mutual Fund</span>
                                        </li>
                                        <li className="flex items-start">
                                            <svg className="w-5 h-5 text-accent-green mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                            </svg>
                                            <span>Gold Partner with Reliance Mutual Fund</span>
                                        </li>
                                    </ul>
                                </div>
                                */}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="section-container">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="card"
                        >
                            <div className="flex items-center justify-center w-16 h-16 mb-6 bg-primary/10 rounded-2xl">
                                <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-neutral-900">Our Mission</h3>
                            <p className="leading-relaxed text-neutral-600">
                                Our mission is to be the bridge to financial success for every Indian. We aim to provide guidance, support, and reliable financial services, ensuring individuals across the nation can achieve their financial goals. We strive to make mutual fund investing accessible, understandable, and effective for everyone.
                            </p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.2 }}
                            className="card"
                        >
                            <div className="flex items-center justify-center w-16 h-16 mb-6 bg-accent-green/10 rounded-2xl">
                                <svg className="w-8 h-8 text-accent-green" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                </svg>
                            </div>
                            <h3 className="mb-4 text-2xl font-bold text-neutral-900">Our Vision</h3>
                            <p className="leading-relaxed text-neutral-600">
                                Our vision is to witness a financially literate and secure India where every individual's financial dreams are realized. We strive to empower our clients through personalized services, fostering financial well-being and creating a legacy of prosperity for future generations.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Approach */}
            <section className="py-16 bg-white md:py-24">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl text-neutral-900">
                            Our Approach to Your Investments
                        </h2>
                        <p className="max-w-3xl mx-auto text-lg text-neutral-600">
                            We follow a systematic, client-centric approach to help you achieve your financial goals
                        </p>
                    </motion.div>

                    <div className="max-w-4xl mx-auto">
                        {[
                            {
                                step: '01',
                                title: 'Understanding Your Goals',
                                description: 'We begin by listening to your dreams, aspirations, and financial objectives. Every client is unique, and we take the time to understand what matters most to you.'
                            },
                            {
                                step: '02',
                                title: 'Understanding Your Risk Profile',
                                description: 'We take the time to understand your investment goals and risk appetite, which helps us guide you toward mutual fund schemes suited to your needs.'
                            },
                            {
                                step: '03',
                                title: 'Suitable Scheme Selection',
                                description: 'Based on your goals and risk profile, we help you select mutual fund schemes and other investment products suited to your specific needs.'
                            },
                            {
                                step: '04',
                                title: 'Implementation & Execution',
                                description: 'We help you implement the strategy with the right financial products and services, ensuring seamless execution of your investments.'
                            },
                            {
                                step: '05',
                                title: 'Ongoing Support & Review',
                                description: 'Investing is a dynamic process. We provide continuous support, regular reviews, and assistance to keep you on track towards your goals.'
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={item.step}
                                initial={{ opacity: 0, x: -30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="flex items-start mb-8 space-x-6 last:mb-0"
                            >
                                <div className="flex items-center justify-center flex-shrink-0 w-16 h-16 text-xl font-bold text-white rounded-full bg-gradient-to-br from-primary to-accent-green">
                                    {item.step}
                                </div>
                                <div className="flex-grow">
                                    <h3 className="mb-2 text-xl font-bold text-neutral-900">{item.title}</h3>
                                    <p className="text-neutral-600">{item.description}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-16 text-white md:py-24 bg-gradient-to-br from-primary to-primary-dark">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl">
                            Our Core Values
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-neutral-100">
                            The principles that guide everything we do
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4 md:gap-8">
                        {[
                            { icon: '🤝', title: 'Trust', description: 'Building lasting relationships based on integrity and transparency' },
                            { icon: '🎯', title: 'Excellence', description: 'Delivering superior service and expert financial guidance' },
                            { icon: '💡', title: 'Innovation', description: 'Embracing modern solutions for better financial outcomes' },
                            { icon: '❤️', title: 'Client-First', description: 'Your financial success is our top priority' }
                        ].map((value, index) => (
                            <motion.div
                                key={value.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 text-center bg-white/10 backdrop-blur-sm rounded-2xl"
                            >
                                <div className="mb-4 text-5xl">{value.icon}</div>
                                <h3 className="mb-2 text-xl font-bold">{value.title}</h3>
                                <p className="text-sm text-neutral-200">{value.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Our Team */}
            <section className="py-16 md:py-24 bg-neutral-50">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mb-12 text-center"
                    >
                        <h2 className="mb-4 text-3xl font-bold md:text-4xl text-neutral-900">
                            Meet Our Team
                        </h2>
                        <p className="max-w-2xl mx-auto text-lg text-neutral-600">
                            Dedicated professionals committed to your financial success
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {[
                            {
                                name: 'Nimesh Jariwala',
                                designation: 'Back Office Executive',
                                image: member0
                            },
                            {
                                name: 'Hardip Saha',
                                designation: 'Back Office Executive',
                                image: member1
                            },
                            {
                                name: 'Hemant solanki',
                                designation: 'Back Office Executive',
                                image: member2
                            },
                            {
                                name: 'Mihir kayasth',
                                designation: 'Back Office Executive',
                                image: member3
                            },
                            {
                                name: 'Vaishali Vasava',
                                designation: 'Back Office Executive',
                                image: member4
                            }
                        ].map((member, index) => (
                            <motion.div
                                key={member.name}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group"
                            >
                                <div className="transition-all duration-300 card hover:shadow-soft-xl">
                                    <div className="relative mb-4 overflow-hidden rounded-xl aspect-square">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-t from-primary/80 to-transparent group-hover:opacity-100" />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="mb-1 text-lg font-bold text-neutral-900">
                                            {member.name}
                                        </h3>
                                        <p className="text-sm font-medium text-primary">
                                            {member.designation}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-white md:py-24">
                <div className="section-container">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto text-center"
                    >
                        <h2 className="mb-6 text-3xl font-bold md:text-4xl text-neutral-900">
                            Ready to Begin Your Financial Journey?
                        </h2>
                        <p className="mb-8 text-lg text-neutral-600">
                            Let's work together to find mutual fund investments suited to your goals
                        </p>
                        <div className="flex flex-col justify-center gap-4 sm:flex-row">
                            <Link to="/contact" className="btn-primary">
                                Get in Touch
                            </Link>
                            <Link to="/services/mutual-funds" className="btn-secondary">
                                Explore Our Services
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>
        </div>
    );
};

export default About;
