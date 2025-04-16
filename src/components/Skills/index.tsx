import { Card, Flex, Progress } from "antd";
import { FaCss3Alt, FaReact } from "react-icons/fa";
import { SiAntdesign, SiMui, SiRedux, SiReduxsaga } from "react-icons/si";
import { TbBrandNextjs, TbBrandSass, TbBrandTypescript } from "react-icons/tb";
import { RiJavascriptLine, RiTailwindCssFill } from "react-icons/ri";
import { BiLogoTypescript } from "react-icons/bi";
import { IoLogoJavascript } from "react-icons/io";
export default function Skills() {
  return (
    <section id={"skills"} className={"bg-pink-200"}>
      <h1>Skills</h1>
      <Card>
        <h3>State Management</h3>
        <Flex>
          <SiReduxsaga />
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>
        <Flex>
          <SiRedux color={"#61DBFB"} />
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>

        <Flex>
          <h4>Zustand</h4>
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>
      </Card>
      <Card>
        <h3>UI</h3>
        <Flex>
          <TbBrandSass />
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>
        <Flex>
          <FaCss3Alt />
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>
        <Flex>
          <RiTailwindCssFill />
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>
        <Flex>
          <SiMui />
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>
        <Flex>
          <SiAntdesign />
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>
      </Card>
      <Card>
        <h3>Library</h3>
        <Flex>
          <FaReact />
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>
        <Flex>
          <TbBrandNextjs />
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>
      </Card>
      <Card>
        <h3>Language</h3>
        <Flex>
          <RiJavascriptLine />
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>
        <Flex>
          <IoLogoJavascript />
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>
        <Flex>
          <BiLogoTypescript />
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>
        <Flex>
          <TbBrandTypescript />
          <Progress
            percent={50}
            percentPosition={{ align: "center", type: "inner" }}
            size={[400, 20]}
          />
        </Flex>
      </Card>
    </section>
  );
}
