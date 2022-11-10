
import { 
  Create,
  SimpleForm,
  
ReferenceInput,AutocompleteInput,
} from "react-admin";

// ------------------------------------------------

export default function CreateDndnode1667920489982(props: any) {
    return (
      <Create>
        <SimpleForm redirect="list">
          <ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

        </SimpleForm>
      </Create>
    );
  }
