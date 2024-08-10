import { IQuestion } from "../models/question.model";

export function validateQuestion(question: IQuestion): string[] {
  const errors: string[] = [];

  if (!question.questionText) {
    errors.push("Question text is required.");
  }

  if (!question.type) {
    errors.push("Question type is required.");
  }

  if (
    !["boolean", "scale", "chips", "multiple-choice", "multiple-choice-img", "open-ended"].includes(
      question.type
    )
  ) {
    errors.push("Invalid question type.");
  }

  if (["multiple-choice", "chips", "multiple-choice-img"].includes(question.type)) {
    if (!question.options || question.options.length === 0) {
      errors.push(
        "Options are required for multiple-choice, chips, and multiple-choice-img question types."
      );
    } else {
      question.options.forEach((option, index) => {
        if (!option.text) {
          errors.push(`Option ${index + 1} text is required.`);
        }
        if (question.type === "multiple-choice-img" && !option.imageUrl) {
          errors.push(
            `Option ${index + 1} must have an image URL for multiple-choice-img question type.`
          );
        }
        if (option.imageUrl && !isValidImageUrl(option.imageUrl)) {
          errors.push(`Option ${index + 1} has an invalid image URL.`);
        }
      });
    }
  }

  return errors;
}

function isValidImageUrl(url: string): boolean {
  const imageUrlPattern = /\.(jpeg|jpg|gif|png)$/i;
  return imageUrlPattern.test(url);
}
