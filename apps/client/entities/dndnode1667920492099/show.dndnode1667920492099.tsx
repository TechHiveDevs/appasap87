
import { 
  Show,
  SimpleShowLayout,
  
NumberField,
DateField,
TextField,
ReferenceField,
} from "react-admin";

// ------------------------------------------------

export default function ShowDndnode1667920492099(props: any) {
return (
    <Show>
      <SimpleShowLayout>
        <TextField source="id" />
<ReferenceField source="dndnode1667920489982id" reference="dndnode1667920489982" />
<DateField source="createdAt" />

      </SimpleShowLayout>
    </Show>
  );
}