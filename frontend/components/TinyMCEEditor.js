// components/TinyMCEEditor.js
import { Editor } from '@tinymce/tinymce-react';

const TinyMCEEditor = ({ value, onEditorChange }) => {
  return (
    <Editor
      initialValue={value}
      init={{
        height: 400,
        menubar: false,
        plugins: [
          'advlist autolink lists link image charmap print preview anchor',
          'searchreplace visualblocks code fullscreen',
          'insertdatetime media table paste code help wordcount',
        ],
        toolbar:
          'undo redo | formatselect | ' +
          'bold italic backcolor | alignleft aligncenter ' +
          'alignright alignjustify | bullist numlist outdent indent | ' +
          'link image | removeformat | help',
      }}
      onEditorChange={onEditorChange}
    />
  );
};

export default TinyMCEEditor;
