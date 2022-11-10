
import { 
  Edit,
  SimpleForm,
  
ReferenceInput,AutocompleteInput,
} from "react-admin";

// -------------------------------------------------------------

export default function EditDndnode1667920489982(props: any) {
return (
    <Edit>
      <SimpleForm redirect="list">
        <ReferenceInput label="user" source="userid" reference="user">
        <AutocompleteInput variant="outlined" /* optionText="user"   */ />
      </ReferenceInput>
    

      </SimpleForm>
    </Edit>
  );
}