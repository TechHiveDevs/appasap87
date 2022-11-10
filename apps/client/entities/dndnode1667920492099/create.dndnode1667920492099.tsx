
import { 
  Create,
  SimpleForm,
  
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateDndnode1667920492099(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <ReferenceInput label="dndnode1667920489982" source="dndnode1667920489982id" reference="dndnode1667920489982">
        <AutocompleteInput variant="outlined" /* optionText="dndnode1667920489982"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
