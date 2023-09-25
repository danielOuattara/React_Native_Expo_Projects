import { StyleSheet } from "react-native";

export const rootStyle = {
  /* dark shades of primary color*/
  "--clr-primary-1": "hsl(162, 61%, 89%)",
  "--clr-primary-2": "hsl(162, 60%, 78%)",
  "--clr-primary-3": "hsl(162, 61%, 67%)",
  "--clr-primary-4": "hsl(162, 61%, 57%)",
  /* primary/main color */
  "--clr-primary-5": "hsl(162, 73%, 46%)",
  /* lighter shades of primary color */
  "--clr-primary-6": "#1aa179",
  "--clr-primary-7": "#13795b",
  "--clr-primary-8": "#0d503c",
  "--clr-primary-9": "#06281e",
  /* darkest grey - used for headings */
  "--clr-grey-1": "hsl(212, 33%, 89%)",
  "--clr-grey-2": "hsl(210, 31%, 80%)",
  "--clr-grey-3": "hsl(211, 27%, 70%)",
  "--clr-grey-4": "hsl(209, 23%, 60%)",
  /* grey used for paragraphs */
  "--clr-grey-5": "hsl(210, 22%, 49%)",
  "--clr-grey-6": "hsl(209, 28%, 39%)",
  "--clr-grey-7": "hsl(209, 34%, 30%)",
  "--clr-grey-8": "hsl(211, 39%, 23%)",
  "--clr-grey-9": " hsl(209, 61%, 16%)",
  "--clr-white": "#fff",
  "--clr-red-dark": "hsl(360, 67%, 44%)",
  "--clr-red-light": "hsl(360, 71%, 66%)",
  "--clr-green-dark": "hsl(125, 67%, 44%)",
  "--clr-green-light": "hsl(125, 71%, 66%)",
  "--clr-black": "#222",
  "--transition": "all 0.3s linear",
  "--spacing": 0.1,
  "--radius": 0.25,
  // '--light-shadow': 0 5px 15px rgba(0, 0, 0, 0.1),
  // '--dark-shadow': 0 5px 15px rgba(0, 0, 0, 0.4),
  "--max-width": 1170,
  "--fixed-width": 450,
  "--clr-pink": "#f28ab2",
};

export const globalStyles = StyleSheet.create({
  container: {
    width: "90",
    marginTop: 5,
    maxWidth: rootStyle["--fixed-width"],
    background: rootStyle["--clr-white"],
    borderRadius: rootStyle["--radius"],
    paddingVertical: 1.5,
    paddingHorizontal: 2,
    // box-shadow: var(--dark-shadow);
  },
  titleText: {
    fontFamily: "nunito-bold",
    fontSize: 28,
    color: "#333",
  },
  titleText2: {
    fontFamily: "Montserrat_400Regular",
    fontSize: 28,
    color: "#333",
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
});
