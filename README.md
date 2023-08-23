# Today I Learned

This is a Full Stack application, basically to create and display facts along with their source of information, their category, and the voting system for each factor.

## Description

![todayILearned](https://github.com/lgope/til/assets/58518192/60518a7b-4c23-4538-b574-96a7e5273fac)

First, you should click on the `share a fact` button. Then you share your facts.

If you want to share a fact you probably have to include these:

- ✅ The content of your fact
- 🚀 A trustworthy source which starts with [http:// or https://] like http://examplesite.com
- 🔥 And the fact's category [which you can choose from a dropdown list]

> Also remember that there is a 200-letter limit to your fact 😉

Each fact consists of 3 buttons:

- 👍 Interesting
- 🤯 Mind-blowing
- ⛔ False

> Note that if your fact's false votes are more than your interesting and mind-blowing facts together your fact will be disputed.

Also, there is a category section which includes various categories such as:

- All
- Science
- Technology
- Finance
- Society
- Entertainment
- Health
- History
- News

🔺 The app is connected to `Supabase` and you can retrieve data from the database, update, and also insert new data.

🔹 Not to mention that the app is mobile friendly (It is completely responsive on mobile devices)


## Usage

<br>

To upload a fact follow these steps:

1. Press the `Share a Fact` button to open the fact form
2. Enter your facts' text in 200 characters or less
3. Enter your trustworthy source beginning with `http://` or `https://`
4. Select a category
5. Press the `Post` button.

<br>

![Upload](https://github.com/lgope/til/assets/58518192/fff8c27e-53e3-4ec8-928d-b3195133e6ad)

<br>

Down below you can see the fact I just created! Note that the fact **React was developed by Google** is disputed, as seen by the `[⛔️ DISPUTED]` that precedes it. For a fact to be disputed, it must be voted false more than it was voted interesting. To vote on a fact simply press the `👍` or `⛔️` buttons as seen below as well.

<br>

![Disputed](https://github.com/lgope/til/assets/58518192/ceb4c5f6-34fc-4308-b207-ad95244aac82)

<br>

![Vote](https://github.com/lgope/til/assets/58518192/11e123ee-3258-4402-85d8-0ef53b8c379d)

<br>

Lastly, you can filter the facts in the database by their category type. Here we pressed the `Society` button to view only facts that relate to society.

<br>

![Filter](https://github.com/lgope/til/assets/58518192/aa7a5b2c-8112-4640-b2bd-8719a8ce8ddd)

<br>


## Installation ⚒️
<details open>
<summary>1. Server Setup</summary>

```bash
#1. Clone this project
~ git clone https://github.com/lgope/til.git
#2. cd into it
~ cd til
#3. Install server dependencies
~ npm i
#3. run app
~ npm run dev
```
</details>

## Contributing 💡
Pull requests are welcome but please open an issue and discuss what you will do before 😊

## Known Bugs 🚨

Feel free to email me at lakshman.gope2@gmail.com if you run into any issues or have questions, ideas, or concerns. Please enjoy
and feel free to share your opinion, constructive criticism, or comments about my work. Thank you! 🙂

## Future Updates 🪴

- Enable PWA
- Auth base vote
- Improve overall UX/UI and fix bugs
- Featured Facts and so on...

And More! There's always room for improvement!

## License 📄
This project is open-sourced under the [MIT license](https://opensource.org/licenses/MIT).

## Deployed Version 🚀

Feel free to visit 👉🏻 https://til-lgope.netlify.app/
