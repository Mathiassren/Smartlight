import GroupLights from "../../src/components/Grouplights";
import { useRouter } from "next/router";

const GroupPage = () => {
  const router = useRouter();
  const { id } = router.query;

  return <GroupLights groupId={id} />;
};

export default GroupPage;
