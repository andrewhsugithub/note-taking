// store data for each note
type NoteData = {
  title: string;
  markdown: string;
  tags: Array<Tag>;
};

// store data for each tag
type Tag = {
  id: string;
  label: string; // tag name
};

// store id for each new note
type Note = {
  id: string;
} & NoteData;

type RawNote = {
  id: string;
} & RawNoteData;

// store data for each note but when storing tags we use string id so we can store as json format
type RawNoteData = {
  title: string;
  markdown: string;
  tagIds: Array<string>;
};
