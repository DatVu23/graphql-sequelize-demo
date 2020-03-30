"use strict"

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("posts", [
      {
        userId: 1,
        title: "SF",
        description: `Yes, I know most people in SF don't pay
          that much in rent but almost everybody I know in this
          industry *outside of SF* has a different expectation for housing.
          And that's my point, don't look at that salary
          and be sad. Look at your cost of living and lifestyle
          and be happy.`,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        userId: 1,
        title: "React Router",
        description: `React Router v5 → v6 weight
        9.4kb → 2.9kb
        
        -70% bundle size change!
        
        Nice work 
        @mjackson`,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        userId: 1,
        title: "5 drinks to get to know me",
        description: `1. Water
        2. Unsweetened Vanilla Almond Milk
        3. Spicy Tomato Juice (on the plane, ofc)
        4. "Do you have Root Beer?"
        5. "Can you make something non-alcoholic and citrusy?"`,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        userId: 2,
        title: "Books",
        description: `I didn't think I was going to make any more books,
        but How To Speak Machine: Computational Thinking For The Rest Of Us happened.
        It is a primer on how computation works
        and how it’s transformed the way that business gets done today.
        Out November 19, 2019`,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        userId: 2,
        title: "Mike Davidson",
        description: `Someone doesn’t necessarily invite me into the right room.
        You can’t sit around waiting for that invitation.
        I am more than happy to design my own role in the best interest of the company.`,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        userId: 2,
        title:
          "5 things I recommend every designer have on their radar in 2020",
        description: `- Shaders
        - GPT-2 
        - Wave function collapse
        - GANs
        - Deep learning`,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        userId: 3,
        title: "coocking",
        description: `Every time someone uses 12 hour clock times with leading zeroes (eg 02:45 meaning 14:45/2:45pm), somewhere a kitten dies. #petpeeve #ux
        I’m looking at you 
        @BenefitBeauty
        . My first thought was “they do brow threads in the middle of the night?!”`,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        userId: 3,
        title: "Squart",
        description: `The web has been heading towards
        being opaque for years as people do things
        to "fix" other things they break
        to make it more like "proper coding"`,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
      {
        userId: 3,
        title:
          "5 things I recommend every designer have on their radar in 2020",
        description: `After many years of only merging PRs on http://contrast-ratio.com I worked on it again!
          New features:
          - Display of relative luminance for each color
          (before it was in the tooltip and couldn't be copied)
          - Display of precise contrast, not just rounded`,
        createdAt: Sequelize.fn("now"),
        updatedAt: Sequelize.fn("now"),
      },
    ])
  },

  down: queryInterface => {
    return queryInterface.bulkDelete("posts", null, {})
  },
}
