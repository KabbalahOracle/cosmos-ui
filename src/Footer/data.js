export default {
  footer: {
    h1: "Cosmos",
    links: [
      { url: "https://blog.cosmos.network/", icon: "medium" },
      "https://twitter.com/cosmos",
      "https://www.linkedin.com/company/tendermint/",
      "https://reddit.com/r/cosmosnetwork",
      "https://t.me/cosmosproject",
      "https://www.slideshare.net/tendermint",
      "https://www.youtube.com/c/CosmosProject"
    ],
    menu: [
      {
        h1: "Identity",
        children: [
          {
            h1: "About",
            href: "/about",
          },
          {
            h1: "Blog",
            href: "https://blog.cosmos.network/",
          },
          {
            h1: "Media",
            href: "/media",
          },
          {
            h1: "Press Kit",
            href: "/presskit",
          },
        ],
      },
      {
        h1: "Projects",
        children: [
          {
            h1: "Cosmos SDK",
            href: "/sdk"
          },
          {
            h1: "Cosmos Hub",
            href: "https://hub.cosmos.network/"
          },
          {
            h1: "Tendermint Core",
            href: "https://tendermint.com/"
          },
          {
            h1: "Interchain Standards",
            href: "https://github.com/cosmos/ics"
          },
        ],
      },
      {
        h1: "Resources",
        children: [
          {
            h1: "Whitepaper",
            href: "https://cosmos.network/resources/whitepaper"
          },
          {
            h1: "Ecosystem",
            href: "/ecosystem"
          },
          {
            h1: "Community",
            href: "/community"
          },
          {
            h1: "Design & Assets",
            href: "/design"
          },
        ]
      },
      {
        h1: "Support",
        children: [
          {
            h1: "Developers",
            href: "/developers"
          },
          {
            h1: "Roadmap",
            href: "/roadmap"
          },
          {
            h1: "FAQ",
            href: "/resources/faq"
          }
        ]
      }
    ],
    smallprint: {
      text: "This website is maintained by Tendermint Inc. The contents and opinions of this website are those of Tendermint Inc."
    }
  }
}