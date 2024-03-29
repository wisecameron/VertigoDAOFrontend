import React from 'react'
import Faq from 'react-faq-component'

const data = {
    title: "FAQ",
    rows: [
        {
            title: "What Utility Does VertigoDAO Provide?",
            content: 
            <p>
                <b>Engagement-Driven Network: </b><br/>Partners existing across the digital space drive user engagement by distributing VertigoDAO assets. 
                <br/><br/>
                <b>Blockchain Bridge: </b><br/>Our network provides worthwhile incentives for Web2 blockchain integration and 
                    fields innovative technology to ease the process.
                <br/><br/>
                <b>Fair Paradigm: </b><br/>
                Participants establish themselves within our ecosystem by leveraging their skills and interests, rather 
                than their capital alone.  Assets can be leveraged throughout the ecosystem, even allowing users to 
                accrue permanent passive rewards and drive engagement to their own platforms through integrated 
                peer-to-peer services.
            </p>,
        },
        {
            title: "What Can VertigoDAO Provide My Company?",
            content: <p>
            <b>Motivation: </b>
            <br/>
            Digital platforms often struggle to garner quality engagement.  Often, users lack a driving incentive to explore
            important opportunities, hindering growth and innovation.
            <br/><br/>
            
            Our service allows companies to grow their audience through blockchain, driving 
            self-selecting traffic through a simple integration protocol that does not require the modification of existing content.

            <br/><br/>
            Through integration, partners gain control over their own supply of VertigoDAO assets, which can be used to reward 
            users for completing desired actions.  This bridges your platform as a mode of progression within our blockchain ecosystem,
            directly incentivizing engagement from a diverse range of users.

            </p>,
        },
        {
            title: "How Does Integration Work?",
            content: <p>
                <b>Consensus: </b><br/>
                We begin our collaborative journey by agreeing upon the digital assets to be distributed
                and determining a roadmap for enhancing user engagement through VertigoDAO-powered blockchain integration.<br/><br/>
                <b>Initialization: </b><br/>
                We deploy custom-tailored smart contract layers to provide secure data access to your team.
                <br/><br/>
                <b>Integration: </b><br/>
                Communicate event completion and reward quantities to our web server.  Notably, this allows your team to integrate 
                without deploying custom smart contract logic or footing gas costs.  
                <br/><br/>
                <b>Growth: </b><br/>
                Your experience will now be featured and promoted on the VertigoDAO core interface, driving engagement from users interested in
                your platform and eager to complete the outlined tasks.

            </p>,
        },
        {
            title: "What is Dark Energy?",
            content:
                <p><b>Dark Energy</b> is a secondary currency isolated within the VertigoDAO ecosystem. 
                It is not an ERC20 token, but rather a value managed by our contract system.  As such, it cannot be transferred 
                between users, preventing any external Dark Energy market.  <br/><br/>
                <b>Usage in Practice</b><br/>
                Users earn Dark Energy passively and through engagement (distributed by partners).  Each week, Vertigo Tokens are
                distributed to users who stake Dark Energy, with the aggregate token quantity following a deflationary curve.  
                <br/><br/>
                <b>Motivation and Significance</b> <br/> Dark Energy is easily obtainable and does not contribute to token inflation, 
                providing the entire ecosystem with greater accessibility to participants.  
                </p>,

        },

        {
            title: "What is The Ecosystem?",
            content: <p>

            <b>Context: </b><br/>
            VertigoDAO is bound by a blockchain economy structure, which drives many of the 
            opportunities available in the core system, a term which refers to base features included in the foundational smart contract system.
            <br/><br/>
            <b>Ecosystem: </b><br/>
            The term &ldquo;Ecosystem&rdquo; refers to the full VertigoDAO network, spanning from core system features and the economy 
            to the diverse range of integrated experiences available as implicit modes of progression. 

            </p>,
        },
        {
            title: "Why Should Users Participate in the Ecosystem?",
            content: <p>
                <b>Engagement-Based: </b><br/>
                VertigoDAO rewards users for participating within integrated platforms,  each representing different niches and interests.  As a result, 
                our system allows individuals to leverage their skills and interests to build their presence on 
                the blockchain, rather than simply providing rewards in exchange for capital.<br/><br/>

                <b>Meaningful Progression: </b><br/>
                Instead of trading time for flat rewards, users can invest their Dark Energy in 
                <b> Virtual Real Estate</b> to permanently establish passive Dark Energy earnings.
                <br/><br/>
                <b>Constant Evolution: </b><br/>
                New opportunities constantly arise as the VertigoDAO network expands, 
                providing new opportunities for users to leverage their skills to gain
                a competitive advantage.

            </p>,
        },        

    ],
};

const styles = {
    bgColor: 'none',
    titleTextColor: "white",
    rowTitleColor: "white",
    rowContentColor: 'white',
    arrowColor: "grey",
    width: "10vmax"
};

const config = {
    animate: true,
    arrowIcon: "↓",
    tabFocus: true
};

export default function FAQ(props)
{
    return(
        <div {...props}>
            <Faq 
                data = {data}
                styles = {styles}
                config = {config}
            />
        </div>
    )
}

