export const useVoice = (question) => {
     const titles = question.title;
     const notes = question.notes;

     return {
          titles,
          notes,
     };
};
