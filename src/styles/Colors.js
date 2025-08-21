// Cores fixas para todo o projeto
export const Colors = {
  purple: {
    primary: {
      purple: "#7616dd",
      purpleLight: "#8e76fa",
      purpleDark: "#1d0433",
      cyan: "#18e0ff",
      pink: "#e781fb",
    },
    gradients: {
      header: "linear-gradient(90deg, #e781fb 40%, #8e76fa 60%)",
      quiz: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      summary: {
        warm: "linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%)",
        success: "linear-gradient(45deg, #ff6b6b, #4ecdc4, #45b7d1)",
        purple: "linear-gradient(135deg, #667eea, #764ba2)",
      },
    },
    background: {
      primary: " #7616dd",
      dark: " #1d0433",
      accent: " #18e0ff",
      quiz: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    text: {
      primary: "#f7fafc",
      secondary: "#e2e8f0",
      dark: "#191321",
      muted: "rgba(255, 255, 255, 0.7)",
    },

    states: {
      answered: {
        main: "#f59e0b",
        dark: "rgba(251, 191, 36, 0.2)",
        darker: "rgba(96, 72, 12, 0.3)",
      },
      correct: {
        main: "#10b981",
        dark: "rgba(74, 222, 128, 0.2)",
        darker: "rgba(10, 87, 10, 0.3)",
      },
      wrong: {
        main: "#f87171",
        dark: "rgba(248, 113, 113, 0.2)",
        darker: "rgba(87, 10, 10, 0.3)",
      },
      skipped: {
        main: "#2d3748",
        dark: "rgba(45, 55, 72, 0.2)",
      },
    },

    transparent: {
      white: {
        2: "rgba(255, 255, 255, 0.02)",
        5: "rgba(255, 255, 255, 0.05)",
        10: "rgba(255, 255, 255, 0.1)",
        15: "rgba(255, 255, 255, 0.15)",
        20: "rgba(255, 255, 255, 0.2)",
        30: "rgba(255, 255, 255, 0.3)",
        50: "rgba(255, 255, 255, 0.5)",
        70: "rgba(255, 255, 255, 0.7)",
        80: "rgba(255, 255, 255, 0.8)",
      },
      black: {
        10: "rgba(0, 0, 0, 0.1)",
        20: "rgba(0, 0, 0, 0.2)",
        30: "rgba(0, 0, 0, 0.3)",
        60: "rgba(0, 0, 0, 0.6)",
      },
    },

    title: {
      color: "#e2e8f0",
      border: "#8e76fa",
      background: "rgba(142, 118, 250, 0.15)",
    },

    progress: {
      main: " #6426f5",
    },

    answers: {
      selected: "rgba(251, 191, 36, 0.5)",
      correct: "rgba(74, 222, 128, 0.5)",
      wrong: "rgba(248, 113, 113, 0.5)",
      skipped: "rgba(45, 55, 72, 0.5)",
    },
  },

  orange: {
    primary: {
      orange: "rgb(255, 197, 158)",
      orangeLight: "rgb(253, 218, 194)",
      orangeDark: "rgb(226, 146, 77)",
      orangeAccent: "rgb(252, 219, 88)",
      orangePink: " #ff9a9e",
    },
    gradients: {
      header: "linear-gradient(90deg,rgb(255, 205, 154) 40%, #ffb380 60%)",
      quiz: "linear-gradient(135deg, #ffa366 0%, #ffb380 100%)",
      summary: {
        warm: "linear-gradient(135deg, #ffecd2 0%, #ffd699 100%)",
        success: "linear-gradient(45deg, #ffa366, #ffd93d, #ffb380)",
        orange: "linear-gradient(135deg, #ffa366, #ffb380)",
      },
    },
    background: {
      primary: "rgb(255, 197, 158)",
      dark: "rgb(226, 146, 77)",
      accent: "rgb(252, 219, 88)",
      quiz: "linear-gradient(135deg, #ffa366 0%, #ffb380 100%)",
    },
    text: {
      primary: " #ffffff",
      secondary: " #f8f9fa",
      dark: " #2c1810",
      muted: "rgba(255, 255, 255, 0.8)",
    },

    states: {
      answered: {
            main: "rgb(229, 208, 115)",
            dark: "rgba(245, 243, 130, 0.4)",
            darker: "rgba(223, 188, 14, 0.8)",
      },
        correct: {
        main: "#98fb98",
        dark: "rgba(152, 251, 152, 0.3)",
        darker: "rgba(50, 205, 50, 0.8)",
      },
      wrong: {
        main: "rgb(212, 104, 104)",
        dark: "rgba(205, 146, 146, 0.3)",
        darker: "rgba(122, 86, 86, 0.8)",
      },
      skipped: {
        main: "#a8a8a8",
        dark: "rgba(168, 168, 168, 0.3)",
      },
    },

    transparent: {
      white: {
        2: "rgba(255, 255, 255, 0.02)",
        5: "rgba(255, 255, 255, 0.05)",
        10: "rgba(255, 255, 255, 0.1)",
        15: "rgba(255, 255, 255, 0.15)",
        20: "rgba(255, 255, 255, 0.2)",
        30: "rgba(255, 255, 255, 0.3)",
        50: "rgba(255, 255, 255, 0.5)",
        70: "rgba(255, 255, 255, 0.7)",
        80: "rgba(255, 255, 255, 0.8)",
      },
      black: {
        10: "rgba(0, 0, 0, 0.1)",
        20: "rgba(0, 0, 0, 0.2)",
        30: "rgba(0, 0, 0, 0.3)",
        60: "rgba(0, 0, 0, 0.6)",
      },
    },

    title: {
      color: "#ffffff",
      border: "#ffb380",
      background: "rgba(255, 179, 128, 0.2)",
    },

    progress: {
      main: "#ffa366",
    },

    answers: {
      selected: "rgba(255, 179, 102, 0.6)",
      correct: "rgba(17, 115, 71, 0.6)",
      wrong: "rgb(201, 55, 42)",
      skipped: "rgba(101, 100, 100, 0.6)",
    },
  },

  blue: {
    primary: {
      blue: "#87ceeb",
      blueLight: "#b0e0e6",
      blueDark: "#4682b4",
      blueAccent: "#00bfff",
      bluePurple: "#9370db",
    },
    gradients: {
      header: "linear-gradient(90deg,rgb(186, 203, 241) 40%, #87ceeb 60%)",
      quiz: "linear-gradient(135deg, #87ceeb 0%, #b0e0e6 100%)",
      summary: {
        warm: "linear-gradient(135deg, #e6f3ff 0%, #b3d9ff 100%)",
        success: "linear-gradient(45deg, #87ceeb, #00bfff, #b0e0e6)",
        blue: "linear-gradient(135deg, #87ceeb, #b0e0e6)",
      },
    },
    background: {
      primary: " #87ceeb",
      dark: " #4682b4",
      accent: " #00bfff",
      quiz: "linear-gradient(135deg, #87ceeb 0%, #b0e0e6 100%)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#f8f9fa",
      dark: "#1a3a5f",
      muted: "rgba(255, 255, 255, 0.8)",
    },

    states: {
      answered: {
        main: "#5dade2",
        dark: "rgba(93, 173, 226, 0.3)",
        darker: "rgba(52, 152, 219, 0.8)",
      },
      correct: {
        main: "#58d68d",
        dark: "rgba(88, 214, 141, 0.3)",
        darker: "rgba(46, 204, 113, 0.8)",
      },
      wrong: {
        main: "#ec7063",
        dark: "rgba(236, 112, 99, 0.3)",
        darker: "rgba(231, 76, 60, 0.8)",
      },
      skipped: {
        main: "#bdc3c7",
        dark: "rgba(189, 195, 199, 0.3)",
      },
    },

    transparent: {
      white: {
        2: "rgba(255, 255, 255, 0.02)",
        5: "rgba(255, 255, 255, 0.05)",
        10: "rgba(255, 255, 255, 0.1)",
        15: "rgba(255, 255, 255, 0.15)",
        20: "rgba(255, 255, 255, 0.2)",
        30: "rgba(255, 255, 255, 0.3)",
        50: "rgba(255, 255, 255, 0.5)",
        70: "rgba(255, 255, 255, 0.7)",
        80: "rgba(255, 255, 255, 0.8)",
      },
      black: {
        10: "rgba(0, 0, 0, 0.1)",
        20: "rgba(0, 0, 0, 0.2)",
        30: "rgba(0, 0, 0, 0.3)",
        60: "rgba(0, 0, 0, 0.6)",
      },
    },

    title: {
      color: "#ffffff",
      border: "#b0e0e6",
      background: "rgba(176, 224, 230, 0.2)",
    },

    progress: {
      main: "#87ceeb",
    },

    answers: {
      selected: "rgba(93, 173, 226, 0.6)",
      correct: "rgba(88, 214, 141, 0.6)",
      wrong: "rgba(236, 112, 99, 0.6)",
      skipped: "rgba(189, 195, 199, 0.6)",
    },
  },

  gray: {
    primary: {
      gray: "#b8b8b8",
      grayLight: "#d3d3d3",
      grayDark: "#696969",
      grayAccent: "#c0c0c0",
      grayBlue: "#a9a9a9",
    },
    gradients: {
      header: "linear-gradient(90deg, #a9a9a9 40%, #b8b8b8 60%)",
      quiz: "linear-gradient(135deg, #b8b8b8 0%, #d3d3d3 100%)",
      summary: {
        warm: "linear-gradient(135deg, #f5f5f5 0%, #e8e8e8 100%)",
        success: "linear-gradient(45deg, #b8b8b8, #c0c0c0, #d3d3d3)",
        gray: "linear-gradient(135deg, #b8b8b8, #d3d3d3)",
      },
    },
    background: {
      primary: "#b8b8b8",
      dark: "#696969",
      accent: "#c0c0c0",
      quiz: "linear-gradient(135deg, #b8b8b8 0%, #d3d3d3 100%)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#f8f9fa",
      dark: "#2c2c2c",
      muted: "rgba(255, 255, 255, 0.8)",
    },

    states: {
      answered: {
        main: "#a0a0a0",
        dark: "rgba(160, 160, 160, 0.3)",
        darker: "rgba(128, 128, 128, 0.8)",
      },
      correct: {
        main: "#90ee90",
        dark: "rgba(144, 238, 144, 0.3)",
        darker: "rgba(34, 139, 34, 0.8)",
      },
      wrong: {
        main: "#f08080",
        dark: "rgba(240, 128, 128, 0.3)",
        darker: "rgba(220, 20, 60, 0.8)",
      },
      skipped: {
        main: "#c0c0c0",
        dark: "rgba(192, 192, 192, 0.3)",
      },
    },

    transparent: {
      white: {
        2: "rgba(255, 255, 255, 0.02)",
        5: "rgba(255, 255, 255, 0.05)",
        10: "rgba(255, 255, 255, 0.1)",
        15: "rgba(255, 255, 255, 0.15)",
        20: "rgba(255, 255, 255, 0.2)",
        30: "rgba(255, 255, 255, 0.3)",
        50: "rgba(255, 255, 255, 0.5)",
        70: "rgba(255, 255, 255, 0.7)",
        80: "rgba(255, 255, 255, 0.8)",
      },
      black: {
        10: "rgba(0, 0, 0, 0.1)",
        20: "rgba(0, 0, 0, 0.2)",
        30: "rgba(0, 0, 0, 0.3)",
        60: "rgba(0, 0, 0, 0.6)",
      },
    },

    title: {
      color: "#ffffff",
      border: "#d3d3d3",
      background: "rgba(211, 211, 211, 0.2)",
    },

    progress: {
      main: "#b8b8b8",
    },

    answers: {
      selected: "rgba(160, 160, 160, 0.6)",
      correct: "rgba(144, 238, 144, 0.6)",
      wrong: "rgba(240, 128, 128, 0.6)",
      skipped: "rgba(192, 192, 192, 0.6)",
    },
  },

  pink: {
    primary: {
      pink: "#ffb6c1",
      pinkLight: "#ffc0cb",
      pinkDark: "#db7093",
      pinkAccent: "#ff69b4",
      pinkPurple: "#dda0dd",
    },
    gradients: {
      header: "linear-gradient(90deg,rgb(235, 206, 235) 40%, #ffb6c1 60%)",
      quiz: "linear-gradient(135deg, #ffb6c1 0%, #ffc0cb 100%)",
      summary: {
        warm: "linear-gradient(135deg, #ffe6f0 0%, #ffd6e7 100%)",
        success: "linear-gradient(45deg, #ffb6c1, #ff69b4, #ffc0cb)",
        pink: "linear-gradient(135deg, #ffb6c1, #ffc0cb)",
      },
    },
    background: {
      primary: "#ffb6c1",
      dark: "#db7093",
      accent: "#ff69b4",
      quiz: "linear-gradient(135deg, #ffb6c1 0%, #ffc0cb 100%)",
    },
    text: {
      primary: "#ffffff",
      secondary: "#f8f9fa",
      dark: "#4a2c2a",
      muted: "rgba(255, 255, 255, 0.8)",
    },

    states: {
      answered: {
        main: "#ffa07a",
        dark: "rgba(255, 160, 122, 0.3)",
        darker: "rgba(255, 140, 105, 0.8)",
      },
      correct: {
        main: "#98fb98",
        dark: "rgba(152, 251, 152, 0.3)",
        darker: "rgba(50, 205, 50, 0.8)",
      },
      wrong: {
        main: "rgb(212, 104, 104)",
        dark: "rgba(205, 146, 146, 0.3)",
        darker: "rgba(122, 86, 86, 0.8)",
      },
      skipped: {
        main: "#d8bfd8",
        dark: "rgba(216, 191, 216, 0.3)",
      },
    },

    transparent: {
      white: {
        2: "rgba(255, 255, 255, 0.02)",
        5: "rgba(255, 255, 255, 0.05)",
        10: "rgba(255, 255, 255, 0.1)",
        15: "rgba(255, 255, 255, 0.15)",
        20: "rgba(255, 255, 255, 0.2)",
        30: "rgba(255, 255, 255, 0.3)",
        50: "rgba(255, 255, 255, 0.5)",
        70: "rgba(255, 255, 255, 0.7)",
        80: "rgba(255, 255, 255, 0.8)",
      },
      black: {
        10: "rgba(0, 0, 0, 0.1)",
        20: "rgba(0, 0, 0, 0.2)",
        30: "rgba(0, 0, 0, 0.3)",
        60: "rgba(0, 0, 0, 0.6)",
      },
    },

    title: {
      color: "#ffffff",
      border: "#ffc0cb",
      background: "rgba(255, 192, 203, 0.2)",
    },

    progress: {
      main: "#ffb6c1",
    },

    answers: {
      selected: "rgba(255, 160, 122, 0.6)",
      correct: "rgba(152, 251, 152, 0.6)",
      wrong: "rgba(240, 160, 160, 0.6)",
      skipped: "rgba(216, 191, 216, 0.6)",
    },
  },
};

export const getCSSVariables = (theme = "purple") => {
  const themeColors = Colors[theme] || Colors.base;

  return {
    "--header-title-gradient": themeColors.gradients.header,
    "--title-color": themeColors.title.color,
    "--title-border": themeColors.title.border,
    "--title-bg": themeColors.title.background,
    "--quiz-background": themeColors.gradients.quiz,
    "--quiz-text": themeColors.text.primary,
    "--quiz-progress": themeColors.progress.main,
    "--bg-primary": themeColors.background.primary,
    "--bg-dark": themeColors.background.dark,
    "--bg-accent": themeColors.background.accent,
    "--text-color": themeColors.text.primary,
    "--answered": themeColors.states.answered.main,
    "--answered-dark": themeColors.states.answered.dark,
    "--answered-dark-2": themeColors.states.answered.darker,
    "--correct": themeColors.states.correct.main,
    "--correct-dark": themeColors.states.correct.dark,
    "--correct-dark-2": themeColors.states.correct.darker,
    "--wrong": themeColors.states.wrong.main,
    "--wrong-dark": themeColors.states.wrong.dark,
    "--wrong-dark-2": themeColors.states.wrong.darker,
    "--skipped": themeColors.states.skipped.main,
    "--skipped-dark": themeColors.states.skipped.dark,
    "--selected-background-color": themeColors.answers.selected,
    "--correct-background-color": themeColors.answers.correct,
    "--wrong-background-color": themeColors.answers.wrong,
    "--skipped-background-color": themeColors.answers.skipped,
    "--dark-transparent-10": themeColors.transparent.black[10],
    "--dark-transparent-20": themeColors.transparent.black[20],
    "--dark-transparent-30": themeColors.transparent.black[30],
    "--dark-transparent-60": themeColors.transparent.black[60],
    "--transparent-2": themeColors.transparent.white[2],
    "--transparent-5": themeColors.transparent.white[5],
    "--transparent-10": themeColors.transparent.white[10],
    "--transparent-15": themeColors.transparent.white[15],
    "--transparent-20": themeColors.transparent.white[20],
    "--transparent-30": themeColors.transparent.white[30],
    "--transparent-50": themeColors.transparent.white[50],
    "--transparent-70": themeColors.transparent.white[70],
    "--transparent-80": themeColors.transparent.white[80],
  };
};
