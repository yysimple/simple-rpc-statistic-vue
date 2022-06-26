import {service} from "@/util/http";

export const listTrace = (data) => {
    const url = `simpleAgentLog/listTrace`
    return service.post(url, data)
}
