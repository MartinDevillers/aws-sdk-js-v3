import {
  CreateMeshCommandInput,
  CreateMeshCommandOutput
} from "../commands/CreateMeshCommand";
import {
  CreateRouteCommandInput,
  CreateRouteCommandOutput
} from "../commands/CreateRouteCommand";
import {
  CreateVirtualNodeCommandInput,
  CreateVirtualNodeCommandOutput
} from "../commands/CreateVirtualNodeCommand";
import {
  CreateVirtualRouterCommandInput,
  CreateVirtualRouterCommandOutput
} from "../commands/CreateVirtualRouterCommand";
import {
  CreateVirtualServiceCommandInput,
  CreateVirtualServiceCommandOutput
} from "../commands/CreateVirtualServiceCommand";
import {
  DeleteMeshCommandInput,
  DeleteMeshCommandOutput
} from "../commands/DeleteMeshCommand";
import {
  DeleteRouteCommandInput,
  DeleteRouteCommandOutput
} from "../commands/DeleteRouteCommand";
import {
  DeleteVirtualNodeCommandInput,
  DeleteVirtualNodeCommandOutput
} from "../commands/DeleteVirtualNodeCommand";
import {
  DeleteVirtualRouterCommandInput,
  DeleteVirtualRouterCommandOutput
} from "../commands/DeleteVirtualRouterCommand";
import {
  DeleteVirtualServiceCommandInput,
  DeleteVirtualServiceCommandOutput
} from "../commands/DeleteVirtualServiceCommand";
import {
  DescribeMeshCommandInput,
  DescribeMeshCommandOutput
} from "../commands/DescribeMeshCommand";
import {
  DescribeRouteCommandInput,
  DescribeRouteCommandOutput
} from "../commands/DescribeRouteCommand";
import {
  DescribeVirtualNodeCommandInput,
  DescribeVirtualNodeCommandOutput
} from "../commands/DescribeVirtualNodeCommand";
import {
  DescribeVirtualRouterCommandInput,
  DescribeVirtualRouterCommandOutput
} from "../commands/DescribeVirtualRouterCommand";
import {
  DescribeVirtualServiceCommandInput,
  DescribeVirtualServiceCommandOutput
} from "../commands/DescribeVirtualServiceCommand";
import {
  ListMeshesCommandInput,
  ListMeshesCommandOutput
} from "../commands/ListMeshesCommand";
import {
  ListRoutesCommandInput,
  ListRoutesCommandOutput
} from "../commands/ListRoutesCommand";
import {
  ListTagsForResourceCommandInput,
  ListTagsForResourceCommandOutput
} from "../commands/ListTagsForResourceCommand";
import {
  ListVirtualNodesCommandInput,
  ListVirtualNodesCommandOutput
} from "../commands/ListVirtualNodesCommand";
import {
  ListVirtualRoutersCommandInput,
  ListVirtualRoutersCommandOutput
} from "../commands/ListVirtualRoutersCommand";
import {
  ListVirtualServicesCommandInput,
  ListVirtualServicesCommandOutput
} from "../commands/ListVirtualServicesCommand";
import {
  TagResourceCommandInput,
  TagResourceCommandOutput
} from "../commands/TagResourceCommand";
import {
  UntagResourceCommandInput,
  UntagResourceCommandOutput
} from "../commands/UntagResourceCommand";
import {
  UpdateMeshCommandInput,
  UpdateMeshCommandOutput
} from "../commands/UpdateMeshCommand";
import {
  UpdateRouteCommandInput,
  UpdateRouteCommandOutput
} from "../commands/UpdateRouteCommand";
import {
  UpdateVirtualNodeCommandInput,
  UpdateVirtualNodeCommandOutput
} from "../commands/UpdateVirtualNodeCommand";
import {
  UpdateVirtualRouterCommandInput,
  UpdateVirtualRouterCommandOutput
} from "../commands/UpdateVirtualRouterCommand";
import {
  UpdateVirtualServiceCommandInput,
  UpdateVirtualServiceCommandOutput
} from "../commands/UpdateVirtualServiceCommand";
import {
  AccessLog,
  AwsCloudMapInstanceAttribute,
  AwsCloudMapServiceDiscovery,
  Backend,
  BadRequestException,
  ConflictException,
  DnsServiceDiscovery,
  Duration,
  EgressFilter,
  FileAccessLog,
  ForbiddenException,
  GrpcRetryPolicy,
  GrpcRetryPolicyEvent,
  GrpcRoute,
  GrpcRouteAction,
  GrpcRouteMatch,
  GrpcRouteMetadata,
  GrpcRouteMetadataMatchMethod,
  HeaderMatchMethod,
  HealthCheckPolicy,
  HttpRetryPolicy,
  HttpRoute,
  HttpRouteAction,
  HttpRouteHeader,
  HttpRouteMatch,
  InternalServerErrorException,
  LimitExceededException,
  Listener,
  Logging,
  MatchRange,
  MeshData,
  MeshRef,
  MeshSpec,
  MeshStatus,
  NotFoundException,
  PortMapping,
  ResourceInUseException,
  ResourceMetadata,
  RouteData,
  RouteRef,
  RouteSpec,
  RouteStatus,
  ServiceDiscovery,
  ServiceUnavailableException,
  TagRef,
  TcpRetryPolicyEvent,
  TcpRoute,
  TcpRouteAction,
  TooManyRequestsException,
  TooManyTagsException,
  VirtualNodeData,
  VirtualNodeRef,
  VirtualNodeServiceProvider,
  VirtualNodeSpec,
  VirtualNodeStatus,
  VirtualRouterData,
  VirtualRouterListener,
  VirtualRouterRef,
  VirtualRouterServiceProvider,
  VirtualRouterSpec,
  VirtualRouterStatus,
  VirtualServiceBackend,
  VirtualServiceData,
  VirtualServiceProvider,
  VirtualServiceRef,
  VirtualServiceSpec,
  VirtualServiceStatus,
  WeightedTarget
} from "../models/index";
import {
  HttpRequest as __HttpRequest,
  HttpResponse as __HttpResponse
} from "@aws-sdk/protocol-http";
import {
  SmithyException as __SmithyException,
  extendedEncodeURIComponent as __extendedEncodeURIComponent
} from "@aws-sdk/smithy-client";
import {
  Endpoint as __Endpoint,
  MetadataBearer as __MetadataBearer,
  ResponseMetadata as __ResponseMetadata,
  SerdeContext as __SerdeContext
} from "@aws-sdk/types";
import { v4 as generateIdempotencyToken } from "uuid";

export const serializeAws_restJson1_1CreateMeshCommand = async (
  input: CreateMeshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v20190125/meshes";
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.meshName !== undefined && { meshName: input.meshName }),
    ...(input.spec !== undefined && {
      spec: serializeAws_restJson1_1MeshSpec(input.spec, context)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagList(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateRouteCommand = async (
  input: CreateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.routeName !== undefined && { routeName: input.routeName }),
    ...(input.spec !== undefined && {
      spec: serializeAws_restJson1_1RouteSpec(input.spec, context)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagList(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateVirtualNodeCommand = async (
  input: CreateVirtualNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined && {
      spec: serializeAws_restJson1_1VirtualNodeSpec(input.spec, context)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagList(input.tags, context)
    }),
    ...(input.virtualNodeName !== undefined && {
      virtualNodeName: input.virtualNodeName
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateVirtualRouterCommand = async (
  input: CreateVirtualRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined && {
      spec: serializeAws_restJson1_1VirtualRouterSpec(input.spec, context)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagList(input.tags, context)
    }),
    ...(input.virtualRouterName !== undefined && {
      virtualRouterName: input.virtualRouterName
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1CreateVirtualServiceCommand = async (
  input: CreateVirtualServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined && {
      spec: serializeAws_restJson1_1VirtualServiceSpec(input.spec, context)
    }),
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagList(input.tags, context)
    }),
    ...(input.virtualServiceName !== undefined && {
      virtualServiceName: input.virtualServiceName
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteMeshCommand = async (
  input: DeleteMeshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v20190125/meshes/{meshName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteRouteCommand = async (
  input: DeleteRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.routeName !== undefined) {
    const labelValue: string = input.routeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: routeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{routeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: routeName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteVirtualNodeCommand = async (
  input: DeleteVirtualNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualNodeName !== undefined) {
    const labelValue: string = input.virtualNodeName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualNodeName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualNodeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: virtualNodeName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteVirtualRouterCommand = async (
  input: DeleteVirtualRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DeleteVirtualServiceCommand = async (
  input: DeleteVirtualServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualServiceName !== undefined) {
    const labelValue: string = input.virtualServiceName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualServiceName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualServiceName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualServiceName."
    );
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "DELETE",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeMeshCommand = async (
  input: DescribeMeshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v20190125/meshes/{meshName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeRouteCommand = async (
  input: DescribeRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.routeName !== undefined) {
    const labelValue: string = input.routeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: routeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{routeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: routeName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeVirtualNodeCommand = async (
  input: DescribeVirtualNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualNodeName !== undefined) {
    const labelValue: string = input.virtualNodeName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualNodeName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualNodeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: virtualNodeName.");
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeVirtualRouterCommand = async (
  input: DescribeVirtualRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1DescribeVirtualServiceCommand = async (
  input: DescribeVirtualServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualServiceName !== undefined) {
    const labelValue: string = input.virtualServiceName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualServiceName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualServiceName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualServiceName."
    );
  }
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1ListMeshesCommand = async (
  input: ListMeshesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v20190125/meshes";
  const query: any = {
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListRoutesCommand = async (
  input: ListRoutesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  const query: any = {
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListTagsForResourceCommand = async (
  input: ListTagsForResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v20190125/tags";
  const query: any = {
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken }),
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListVirtualNodesCommand = async (
  input: ListVirtualNodesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualNodes";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListVirtualRoutersCommand = async (
  input: ListVirtualRoutersCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualRouters";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1ListVirtualServicesCommand = async (
  input: ListVirtualServicesCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": ""
  };
  let resolvedPath = "/v20190125/meshes/{meshName}/virtualServices";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  const query: any = {
    ...(input.limit !== undefined && { limit: input.limit.toString() }),
    ...(input.nextToken !== undefined && { nextToken: input.nextToken })
  };
  let body: any;
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "GET",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1TagResourceCommand = async (
  input: TagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v20190125/tag";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  };
  let body: any;
  body = JSON.stringify({
    ...(input.tags !== undefined && {
      tags: serializeAws_restJson1_1TagList(input.tags, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1UntagResourceCommand = async (
  input: UntagResourceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v20190125/untag";
  const query: any = {
    ...(input.resourceArn !== undefined && { resourceArn: input.resourceArn })
  };
  let body: any;
  body = JSON.stringify({
    ...(input.tagKeys !== undefined && {
      tagKeys: serializeAws_restJson1_1TagKeyList(input.tagKeys, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    query,
    body
  });
};

export const serializeAws_restJson1_1UpdateMeshCommand = async (
  input: UpdateMeshCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath = "/v20190125/meshes/{meshName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined && {
      spec: serializeAws_restJson1_1MeshSpec(input.spec, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateRouteCommand = async (
  input: UpdateRouteCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouter/{virtualRouterName}/routes/{routeName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.routeName !== undefined) {
    const labelValue: string = input.routeName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: routeName.");
    }
    resolvedPath = resolvedPath.replace(
      "{routeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: routeName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined && {
      spec: serializeAws_restJson1_1RouteSpec(input.spec, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateVirtualNodeCommand = async (
  input: UpdateVirtualNodeCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualNodes/{virtualNodeName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualNodeName !== undefined) {
    const labelValue: string = input.virtualNodeName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualNodeName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualNodeName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: virtualNodeName.");
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined && {
      spec: serializeAws_restJson1_1VirtualNodeSpec(input.spec, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateVirtualRouterCommand = async (
  input: UpdateVirtualRouterCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualRouters/{virtualRouterName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualRouterName !== undefined) {
    const labelValue: string = input.virtualRouterName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualRouterName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualRouterName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualRouterName."
    );
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined && {
      spec: serializeAws_restJson1_1VirtualRouterSpec(input.spec, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const serializeAws_restJson1_1UpdateVirtualServiceCommand = async (
  input: UpdateVirtualServiceCommandInput,
  context: __SerdeContext
): Promise<__HttpRequest> => {
  const headers: any = {
    "Content-Type": "application/json"
  };
  let resolvedPath =
    "/v20190125/meshes/{meshName}/virtualServices/{virtualServiceName}";
  if (input.meshName !== undefined) {
    const labelValue: string = input.meshName;
    if (labelValue.length <= 0) {
      throw new Error("Empty value provided for input HTTP label: meshName.");
    }
    resolvedPath = resolvedPath.replace(
      "{meshName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error("No value provided for input HTTP label: meshName.");
  }
  if (input.virtualServiceName !== undefined) {
    const labelValue: string = input.virtualServiceName;
    if (labelValue.length <= 0) {
      throw new Error(
        "Empty value provided for input HTTP label: virtualServiceName."
      );
    }
    resolvedPath = resolvedPath.replace(
      "{virtualServiceName}",
      __extendedEncodeURIComponent(labelValue)
    );
  } else {
    throw new Error(
      "No value provided for input HTTP label: virtualServiceName."
    );
  }
  let body: any;
  body = JSON.stringify({
    clientToken: input.clientToken ?? generateIdempotencyToken(),
    ...(input.spec !== undefined && {
      spec: serializeAws_restJson1_1VirtualServiceSpec(input.spec, context)
    })
  });
  const { hostname, protocol = "https", port } = await context.endpoint();
  return new __HttpRequest({
    protocol,
    hostname,
    port,
    method: "PUT",
    headers,
    path: resolvedPath,
    body
  });
};

export const deserializeAws_restJson1_1CreateMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateMeshCommandError(output, context);
  }
  const contents: CreateMeshCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateMeshOutput",
    mesh: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1_1MeshData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateMeshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateMeshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateRouteCommandError(output, context);
  }
  const contents: CreateRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateRouteOutput",
    route: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1_1RouteData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateVirtualNodeCommandError(
      output,
      context
    );
  }
  const contents: CreateVirtualNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVirtualNodeOutput",
    virtualNode: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1_1VirtualNodeData(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateVirtualNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateVirtualRouterCommandError(
      output,
      context
    );
  }
  const contents: CreateVirtualRouterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVirtualRouterOutput",
    virtualRouter: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1_1VirtualRouterData(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateVirtualRouterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualRouterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1CreateVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1CreateVirtualServiceCommandError(
      output,
      context
    );
  }
  const contents: CreateVirtualServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "CreateVirtualServiceOutput",
    virtualService: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1_1VirtualServiceData(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1CreateVirtualServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<CreateVirtualServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteMeshCommandError(output, context);
  }
  const contents: DeleteMeshCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteMeshOutput",
    mesh: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1_1MeshData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteMeshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteMeshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lattice.v20190125#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteRouteCommandError(output, context);
  }
  const contents: DeleteRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteRouteOutput",
    route: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1_1RouteData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lattice.v20190125#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteVirtualNodeCommandError(
      output,
      context
    );
  }
  const contents: DeleteVirtualNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteVirtualNodeOutput",
    virtualNode: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1_1VirtualNodeData(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteVirtualNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lattice.v20190125#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteVirtualRouterCommandError(
      output,
      context
    );
  }
  const contents: DeleteVirtualRouterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteVirtualRouterOutput",
    virtualRouter: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1_1VirtualRouterData(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteVirtualRouterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualRouterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ResourceInUseException":
    case "com.amazonaws.lattice.v20190125#ResourceInUseException":
      response = {
        ...(await deserializeAws_restJson1_1ResourceInUseExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DeleteVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DeleteVirtualServiceCommandError(
      output,
      context
    );
  }
  const contents: DeleteVirtualServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DeleteVirtualServiceOutput",
    virtualService: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1_1VirtualServiceData(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DeleteVirtualServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DeleteVirtualServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeMeshCommandError(output, context);
  }
  const contents: DescribeMeshCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeMeshOutput",
    mesh: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1_1MeshData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeMeshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeMeshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeRouteCommandError(output, context);
  }
  const contents: DescribeRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeRouteOutput",
    route: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1_1RouteData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeVirtualNodeCommandError(
      output,
      context
    );
  }
  const contents: DescribeVirtualNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeVirtualNodeOutput",
    virtualNode: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1_1VirtualNodeData(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeVirtualNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeVirtualRouterCommandError(
      output,
      context
    );
  }
  const contents: DescribeVirtualRouterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeVirtualRouterOutput",
    virtualRouter: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1_1VirtualRouterData(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeVirtualRouterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualRouterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1DescribeVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1DescribeVirtualServiceCommandError(
      output,
      context
    );
  }
  const contents: DescribeVirtualServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "DescribeVirtualServiceOutput",
    virtualService: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1_1VirtualServiceData(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1DescribeVirtualServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<DescribeVirtualServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListMeshesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeshesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListMeshesCommandError(output, context);
  }
  const contents: ListMeshesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListMeshesOutput",
    meshes: undefined,
    nextToken: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.meshes !== undefined && data.meshes !== null) {
    contents.meshes = deserializeAws_restJson1_1MeshList(data.meshes, context);
  }
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListMeshesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListMeshesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListRoutesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListRoutesCommandError(output, context);
  }
  const contents: ListRoutesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListRoutesOutput",
    nextToken: undefined,
    routes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.routes !== undefined && data.routes !== null) {
    contents.routes = deserializeAws_restJson1_1RouteList(data.routes, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListRoutesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListRoutesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListTagsForResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListTagsForResourceCommandError(
      output,
      context
    );
  }
  const contents: ListTagsForResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListTagsForResourceOutput",
    nextToken: undefined,
    tags: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.tags !== undefined && data.tags !== null) {
    contents.tags = deserializeAws_restJson1_1TagList(data.tags, context);
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListTagsForResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListTagsForResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListVirtualNodesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualNodesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListVirtualNodesCommandError(
      output,
      context
    );
  }
  const contents: ListVirtualNodesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVirtualNodesOutput",
    nextToken: undefined,
    virtualNodes: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualNodes !== undefined && data.virtualNodes !== null) {
    contents.virtualNodes = deserializeAws_restJson1_1VirtualNodeList(
      data.virtualNodes,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListVirtualNodesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualNodesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListVirtualRoutersCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualRoutersCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListVirtualRoutersCommandError(
      output,
      context
    );
  }
  const contents: ListVirtualRoutersCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVirtualRoutersOutput",
    nextToken: undefined,
    virtualRouters: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualRouters !== undefined && data.virtualRouters !== null) {
    contents.virtualRouters = deserializeAws_restJson1_1VirtualRouterList(
      data.virtualRouters,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListVirtualRoutersCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualRoutersCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1ListVirtualServicesCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualServicesCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1ListVirtualServicesCommandError(
      output,
      context
    );
  }
  const contents: ListVirtualServicesCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "ListVirtualServicesOutput",
    nextToken: undefined,
    virtualServices: undefined
  };
  const data: any = await parseBody(output.body, context);
  if (data.nextToken !== undefined && data.nextToken !== null) {
    contents.nextToken = data.nextToken;
  }
  if (data.virtualServices !== undefined && data.virtualServices !== null) {
    contents.virtualServices = deserializeAws_restJson1_1VirtualServiceList(
      data.virtualServices,
      context
    );
  }
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1ListVirtualServicesCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<ListVirtualServicesCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1TagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1TagResourceCommandError(output, context);
  }
  const contents: TagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "TagResourceOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1TagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<TagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyTagsException":
    case "com.amazonaws.lattice.v20190125#TooManyTagsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyTagsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UntagResourceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UntagResourceCommandError(output, context);
  }
  const contents: UntagResourceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UntagResourceOutput"
  };
  await collectBody(output.body, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UntagResourceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UntagResourceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateMeshCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMeshCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateMeshCommandError(output, context);
  }
  const contents: UpdateMeshCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateMeshOutput",
    mesh: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.mesh = deserializeAws_restJson1_1MeshData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateMeshCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateMeshCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateRouteCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateRouteCommandError(output, context);
  }
  const contents: UpdateRouteCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateRouteOutput",
    route: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.route = deserializeAws_restJson1_1RouteData(data, context);
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateRouteCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateRouteCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateVirtualNodeCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualNodeCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateVirtualNodeCommandError(
      output,
      context
    );
  }
  const contents: UpdateVirtualNodeCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVirtualNodeOutput",
    virtualNode: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualNode = deserializeAws_restJson1_1VirtualNodeData(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateVirtualNodeCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualNodeCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateVirtualRouterCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualRouterCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateVirtualRouterCommandError(
      output,
      context
    );
  }
  const contents: UpdateVirtualRouterCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVirtualRouterOutput",
    virtualRouter: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualRouter = deserializeAws_restJson1_1VirtualRouterData(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateVirtualRouterCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualRouterCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

export const deserializeAws_restJson1_1UpdateVirtualServiceCommand = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualServiceCommandOutput> => {
  if (output.statusCode !== 200 && output.statusCode >= 400) {
    return deserializeAws_restJson1_1UpdateVirtualServiceCommandError(
      output,
      context
    );
  }
  const contents: UpdateVirtualServiceCommandOutput = {
    $metadata: deserializeMetadata(output),
    __type: "UpdateVirtualServiceOutput",
    virtualService: undefined
  };
  const data: any = await parseBody(output.body, context);
  contents.virtualService = deserializeAws_restJson1_1VirtualServiceData(
    data,
    context
  );
  return Promise.resolve(contents);
};

const deserializeAws_restJson1_1UpdateVirtualServiceCommandError = async (
  output: __HttpResponse,
  context: __SerdeContext
): Promise<UpdateVirtualServiceCommandOutput> => {
  const parsedOutput: any = {
    ...output,
    body: await parseBody(output.body, context)
  };
  let response: __SmithyException & __MetadataBearer & { [key: string]: any };
  let errorCode: string = "UnknownError";
  errorCode = loadRestJsonErrorCode(output, parsedOutput.body);
  switch (errorCode) {
    case "BadRequestException":
    case "com.amazonaws.lattice.v20190125#BadRequestException":
      response = {
        ...(await deserializeAws_restJson1_1BadRequestExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ConflictException":
    case "com.amazonaws.lattice.v20190125#ConflictException":
      response = {
        ...(await deserializeAws_restJson1_1ConflictExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ForbiddenException":
    case "com.amazonaws.lattice.v20190125#ForbiddenException":
      response = {
        ...(await deserializeAws_restJson1_1ForbiddenExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "InternalServerErrorException":
    case "com.amazonaws.lattice.v20190125#InternalServerErrorException":
      response = {
        ...(await deserializeAws_restJson1_1InternalServerErrorExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "LimitExceededException":
    case "com.amazonaws.lattice.v20190125#LimitExceededException":
      response = {
        ...(await deserializeAws_restJson1_1LimitExceededExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "NotFoundException":
    case "com.amazonaws.lattice.v20190125#NotFoundException":
      response = {
        ...(await deserializeAws_restJson1_1NotFoundExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "ServiceUnavailableException":
    case "com.amazonaws.lattice.v20190125#ServiceUnavailableException":
      response = {
        ...(await deserializeAws_restJson1_1ServiceUnavailableExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    case "TooManyRequestsException":
    case "com.amazonaws.lattice.v20190125#TooManyRequestsException":
      response = {
        ...(await deserializeAws_restJson1_1TooManyRequestsExceptionResponse(
          parsedOutput,
          context
        )),
        name: errorCode,
        $metadata: deserializeMetadata(output)
      };
      break;
    default:
      const parsedBody = parsedOutput.body;
      errorCode = parsedBody.code || parsedBody.Code || errorCode;
      response = {
        ...parsedBody,
        name: `${errorCode}`,
        message: parsedBody.message || parsedBody.Message || errorCode,
        $fault: "client",
        $metadata: deserializeMetadata(output)
      } as any;
  }
  const message = response.message || response.Message || errorCode;
  response.message = message;
  delete response.Message;
  return Promise.reject(Object.assign(new Error(message), response));
};

const deserializeAws_restJson1_1BadRequestExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<BadRequestException> => {
  const contents: BadRequestException = {
    name: "BadRequestException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ConflictExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ConflictException> => {
  const contents: ConflictException = {
    name: "ConflictException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ForbiddenExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ForbiddenException> => {
  const contents: ForbiddenException = {
    name: "ForbiddenException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1InternalServerErrorExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<InternalServerErrorException> => {
  const contents: InternalServerErrorException = {
    name: "InternalServerErrorException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1LimitExceededExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<LimitExceededException> => {
  const contents: LimitExceededException = {
    name: "LimitExceededException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1NotFoundExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<NotFoundException> => {
  const contents: NotFoundException = {
    name: "NotFoundException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ResourceInUseExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ResourceInUseException> => {
  const contents: ResourceInUseException = {
    name: "ResourceInUseException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1ServiceUnavailableExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<ServiceUnavailableException> => {
  const contents: ServiceUnavailableException = {
    name: "ServiceUnavailableException",
    $fault: "server",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyRequestsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyRequestsException> => {
  const contents: TooManyRequestsException = {
    name: "TooManyRequestsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const deserializeAws_restJson1_1TooManyTagsExceptionResponse = async (
  parsedOutput: any,
  context: __SerdeContext
): Promise<TooManyTagsException> => {
  const contents: TooManyTagsException = {
    name: "TooManyTagsException",
    $fault: "client",
    $metadata: deserializeMetadata(parsedOutput),
    message: undefined
  };
  const data: any = parsedOutput.body;
  if (data.message !== undefined && data.message !== null) {
    contents.message = data.message;
  }
  return contents;
};

const serializeAws_restJson1_1AccessLog = (
  input: AccessLog,
  context: __SerdeContext
): any => {
  return AccessLog.visit(input, {
    file: value => serializeAws_restJson1_1FileAccessLog(value, context),
    _: value => value
  });
};

const serializeAws_restJson1_1AwsCloudMapInstanceAttribute = (
  input: AwsCloudMapInstanceAttribute,
  context: __SerdeContext
): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_restJson1_1AwsCloudMapInstanceAttributes = (
  input: AwsCloudMapInstanceAttribute[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1AwsCloudMapInstanceAttribute(entry, context)
  );
};

const serializeAws_restJson1_1AwsCloudMapServiceDiscovery = (
  input: AwsCloudMapServiceDiscovery,
  context: __SerdeContext
): any => {
  return {
    ...(input.attributes !== undefined && {
      attributes: serializeAws_restJson1_1AwsCloudMapInstanceAttributes(
        input.attributes,
        context
      )
    }),
    ...(input.namespaceName !== undefined && {
      namespaceName: input.namespaceName
    }),
    ...(input.serviceName !== undefined && { serviceName: input.serviceName })
  };
};

const serializeAws_restJson1_1Backend = (
  input: Backend,
  context: __SerdeContext
): any => {
  return Backend.visit(input, {
    virtualService: value =>
      serializeAws_restJson1_1VirtualServiceBackend(value, context),
    _: value => value
  });
};

const serializeAws_restJson1_1Backends = (
  input: Backend[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Backend(entry, context));
};

const serializeAws_restJson1_1DnsServiceDiscovery = (
  input: DnsServiceDiscovery,
  context: __SerdeContext
): any => {
  return {
    ...(input.hostname !== undefined && { hostname: input.hostname })
  };
};

const serializeAws_restJson1_1Duration = (
  input: Duration,
  context: __SerdeContext
): any => {
  return {
    ...(input.unit !== undefined && { unit: input.unit }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_restJson1_1EgressFilter = (
  input: EgressFilter,
  context: __SerdeContext
): any => {
  return {
    ...(input.type !== undefined && { type: input.type })
  };
};

const serializeAws_restJson1_1FileAccessLog = (
  input: FileAccessLog,
  context: __SerdeContext
): any => {
  return {
    ...(input.path !== undefined && { path: input.path })
  };
};

const serializeAws_restJson1_1GrpcRetryPolicy = (
  input: GrpcRetryPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.grpcRetryEvents !== undefined && {
      grpcRetryEvents: serializeAws_restJson1_1GrpcRetryPolicyEvents(
        input.grpcRetryEvents,
        context
      )
    }),
    ...(input.httpRetryEvents !== undefined && {
      httpRetryEvents: serializeAws_restJson1_1HttpRetryPolicyEvents(
        input.httpRetryEvents,
        context
      )
    }),
    ...(input.maxRetries !== undefined && { maxRetries: input.maxRetries }),
    ...(input.perRetryTimeout !== undefined && {
      perRetryTimeout: serializeAws_restJson1_1Duration(
        input.perRetryTimeout,
        context
      )
    }),
    ...(input.tcpRetryEvents !== undefined && {
      tcpRetryEvents: serializeAws_restJson1_1TcpRetryPolicyEvents(
        input.tcpRetryEvents,
        context
      )
    })
  };
};

const serializeAws_restJson1_1GrpcRetryPolicyEvents = (
  input: (GrpcRetryPolicyEvent | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1GrpcRoute = (
  input: GrpcRoute,
  context: __SerdeContext
): any => {
  return {
    ...(input.action !== undefined && {
      action: serializeAws_restJson1_1GrpcRouteAction(input.action, context)
    }),
    ...(input.match !== undefined && {
      match: serializeAws_restJson1_1GrpcRouteMatch(input.match, context)
    }),
    ...(input.retryPolicy !== undefined && {
      retryPolicy: serializeAws_restJson1_1GrpcRetryPolicy(
        input.retryPolicy,
        context
      )
    })
  };
};

const serializeAws_restJson1_1GrpcRouteAction = (
  input: GrpcRouteAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.weightedTargets !== undefined && {
      weightedTargets: serializeAws_restJson1_1WeightedTargets(
        input.weightedTargets,
        context
      )
    })
  };
};

const serializeAws_restJson1_1GrpcRouteMatch = (
  input: GrpcRouteMatch,
  context: __SerdeContext
): any => {
  return {
    ...(input.metadata !== undefined && {
      metadata: serializeAws_restJson1_1GrpcRouteMetadataList(
        input.metadata,
        context
      )
    }),
    ...(input.methodName !== undefined && { methodName: input.methodName }),
    ...(input.serviceName !== undefined && { serviceName: input.serviceName })
  };
};

const serializeAws_restJson1_1GrpcRouteMetadata = (
  input: GrpcRouteMetadata,
  context: __SerdeContext
): any => {
  return {
    ...(input.invert !== undefined && { invert: input.invert }),
    ...(input.match !== undefined && {
      match: serializeAws_restJson1_1GrpcRouteMetadataMatchMethod(
        input.match,
        context
      )
    }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_restJson1_1GrpcRouteMetadataList = (
  input: GrpcRouteMetadata[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1GrpcRouteMetadata(entry, context)
  );
};

const serializeAws_restJson1_1GrpcRouteMetadataMatchMethod = (
  input: GrpcRouteMetadataMatchMethod,
  context: __SerdeContext
): any => {
  return GrpcRouteMetadataMatchMethod.visit(input, {
    exact: value => value,
    prefix: value => value,
    range: value => serializeAws_restJson1_1MatchRange(value, context),
    regex: value => value,
    suffix: value => value,
    _: value => value
  });
};

const serializeAws_restJson1_1HeaderMatchMethod = (
  input: HeaderMatchMethod,
  context: __SerdeContext
): any => {
  return HeaderMatchMethod.visit(input, {
    exact: value => value,
    prefix: value => value,
    range: value => serializeAws_restJson1_1MatchRange(value, context),
    regex: value => value,
    suffix: value => value,
    _: value => value
  });
};

const serializeAws_restJson1_1HealthCheckPolicy = (
  input: HealthCheckPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.healthyThreshold !== undefined && {
      healthyThreshold: input.healthyThreshold
    }),
    ...(input.intervalMillis !== undefined && {
      intervalMillis: input.intervalMillis
    }),
    ...(input.path !== undefined && { path: input.path }),
    ...(input.port !== undefined && { port: input.port }),
    ...(input.protocol !== undefined && { protocol: input.protocol }),
    ...(input.timeoutMillis !== undefined && {
      timeoutMillis: input.timeoutMillis
    }),
    ...(input.unhealthyThreshold !== undefined && {
      unhealthyThreshold: input.unhealthyThreshold
    })
  };
};

const serializeAws_restJson1_1HttpRetryPolicy = (
  input: HttpRetryPolicy,
  context: __SerdeContext
): any => {
  return {
    ...(input.httpRetryEvents !== undefined && {
      httpRetryEvents: serializeAws_restJson1_1HttpRetryPolicyEvents(
        input.httpRetryEvents,
        context
      )
    }),
    ...(input.maxRetries !== undefined && { maxRetries: input.maxRetries }),
    ...(input.perRetryTimeout !== undefined && {
      perRetryTimeout: serializeAws_restJson1_1Duration(
        input.perRetryTimeout,
        context
      )
    }),
    ...(input.tcpRetryEvents !== undefined && {
      tcpRetryEvents: serializeAws_restJson1_1TcpRetryPolicyEvents(
        input.tcpRetryEvents,
        context
      )
    })
  };
};

const serializeAws_restJson1_1HttpRetryPolicyEvents = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1HttpRoute = (
  input: HttpRoute,
  context: __SerdeContext
): any => {
  return {
    ...(input.action !== undefined && {
      action: serializeAws_restJson1_1HttpRouteAction(input.action, context)
    }),
    ...(input.match !== undefined && {
      match: serializeAws_restJson1_1HttpRouteMatch(input.match, context)
    }),
    ...(input.retryPolicy !== undefined && {
      retryPolicy: serializeAws_restJson1_1HttpRetryPolicy(
        input.retryPolicy,
        context
      )
    })
  };
};

const serializeAws_restJson1_1HttpRouteAction = (
  input: HttpRouteAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.weightedTargets !== undefined && {
      weightedTargets: serializeAws_restJson1_1WeightedTargets(
        input.weightedTargets,
        context
      )
    })
  };
};

const serializeAws_restJson1_1HttpRouteHeader = (
  input: HttpRouteHeader,
  context: __SerdeContext
): any => {
  return {
    ...(input.invert !== undefined && { invert: input.invert }),
    ...(input.match !== undefined && {
      match: serializeAws_restJson1_1HeaderMatchMethod(input.match, context)
    }),
    ...(input.name !== undefined && { name: input.name })
  };
};

const serializeAws_restJson1_1HttpRouteHeaders = (
  input: HttpRouteHeader[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1HttpRouteHeader(entry, context)
  );
};

const serializeAws_restJson1_1HttpRouteMatch = (
  input: HttpRouteMatch,
  context: __SerdeContext
): any => {
  return {
    ...(input.headers !== undefined && {
      headers: serializeAws_restJson1_1HttpRouteHeaders(input.headers, context)
    }),
    ...(input.method !== undefined && { method: input.method }),
    ...(input.prefix !== undefined && { prefix: input.prefix }),
    ...(input.scheme !== undefined && { scheme: input.scheme })
  };
};

const serializeAws_restJson1_1Listener = (
  input: Listener,
  context: __SerdeContext
): any => {
  return {
    ...(input.healthCheck !== undefined && {
      healthCheck: serializeAws_restJson1_1HealthCheckPolicy(
        input.healthCheck,
        context
      )
    }),
    ...(input.portMapping !== undefined && {
      portMapping: serializeAws_restJson1_1PortMapping(
        input.portMapping,
        context
      )
    })
  };
};

const serializeAws_restJson1_1Listeners = (
  input: Listener[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1Listener(entry, context));
};

const serializeAws_restJson1_1Logging = (
  input: Logging,
  context: __SerdeContext
): any => {
  return {
    ...(input.accessLog !== undefined && {
      accessLog: serializeAws_restJson1_1AccessLog(input.accessLog, context)
    })
  };
};

const serializeAws_restJson1_1MatchRange = (
  input: MatchRange,
  context: __SerdeContext
): any => {
  return {
    ...(input.end !== undefined && { end: input.end }),
    ...(input.start !== undefined && { start: input.start })
  };
};

const serializeAws_restJson1_1MeshSpec = (
  input: MeshSpec,
  context: __SerdeContext
): any => {
  return {
    ...(input.egressFilter !== undefined && {
      egressFilter: serializeAws_restJson1_1EgressFilter(
        input.egressFilter,
        context
      )
    })
  };
};

const serializeAws_restJson1_1PortMapping = (
  input: PortMapping,
  context: __SerdeContext
): any => {
  return {
    ...(input.port !== undefined && { port: input.port }),
    ...(input.protocol !== undefined && { protocol: input.protocol })
  };
};

const serializeAws_restJson1_1RouteSpec = (
  input: RouteSpec,
  context: __SerdeContext
): any => {
  return {
    ...(input.grpcRoute !== undefined && {
      grpcRoute: serializeAws_restJson1_1GrpcRoute(input.grpcRoute, context)
    }),
    ...(input.http2Route !== undefined && {
      http2Route: serializeAws_restJson1_1HttpRoute(input.http2Route, context)
    }),
    ...(input.httpRoute !== undefined && {
      httpRoute: serializeAws_restJson1_1HttpRoute(input.httpRoute, context)
    }),
    ...(input.priority !== undefined && { priority: input.priority }),
    ...(input.tcpRoute !== undefined && {
      tcpRoute: serializeAws_restJson1_1TcpRoute(input.tcpRoute, context)
    })
  };
};

const serializeAws_restJson1_1ServiceDiscovery = (
  input: ServiceDiscovery,
  context: __SerdeContext
): any => {
  return ServiceDiscovery.visit(input, {
    awsCloudMap: value =>
      serializeAws_restJson1_1AwsCloudMapServiceDiscovery(value, context),
    dns: value => serializeAws_restJson1_1DnsServiceDiscovery(value, context),
    _: value => value
  });
};

const serializeAws_restJson1_1TagKeyList = (
  input: string[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1TagList = (
  input: TagRef[],
  context: __SerdeContext
): any => {
  return input.map(entry => serializeAws_restJson1_1TagRef(entry, context));
};

const serializeAws_restJson1_1TagRef = (
  input: TagRef,
  context: __SerdeContext
): any => {
  return {
    ...(input.key !== undefined && { key: input.key }),
    ...(input.value !== undefined && { value: input.value })
  };
};

const serializeAws_restJson1_1TcpRetryPolicyEvents = (
  input: (TcpRetryPolicyEvent | string)[],
  context: __SerdeContext
): any => {
  return input.map(entry => entry);
};

const serializeAws_restJson1_1TcpRoute = (
  input: TcpRoute,
  context: __SerdeContext
): any => {
  return {
    ...(input.action !== undefined && {
      action: serializeAws_restJson1_1TcpRouteAction(input.action, context)
    })
  };
};

const serializeAws_restJson1_1TcpRouteAction = (
  input: TcpRouteAction,
  context: __SerdeContext
): any => {
  return {
    ...(input.weightedTargets !== undefined && {
      weightedTargets: serializeAws_restJson1_1WeightedTargets(
        input.weightedTargets,
        context
      )
    })
  };
};

const serializeAws_restJson1_1VirtualNodeServiceProvider = (
  input: VirtualNodeServiceProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualNodeName !== undefined && {
      virtualNodeName: input.virtualNodeName
    })
  };
};

const serializeAws_restJson1_1VirtualNodeSpec = (
  input: VirtualNodeSpec,
  context: __SerdeContext
): any => {
  return {
    ...(input.backends !== undefined && {
      backends: serializeAws_restJson1_1Backends(input.backends, context)
    }),
    ...(input.listeners !== undefined && {
      listeners: serializeAws_restJson1_1Listeners(input.listeners, context)
    }),
    ...(input.logging !== undefined && {
      logging: serializeAws_restJson1_1Logging(input.logging, context)
    }),
    ...(input.serviceDiscovery !== undefined && {
      serviceDiscovery: serializeAws_restJson1_1ServiceDiscovery(
        input.serviceDiscovery,
        context
      )
    })
  };
};

const serializeAws_restJson1_1VirtualRouterListener = (
  input: VirtualRouterListener,
  context: __SerdeContext
): any => {
  return {
    ...(input.portMapping !== undefined && {
      portMapping: serializeAws_restJson1_1PortMapping(
        input.portMapping,
        context
      )
    })
  };
};

const serializeAws_restJson1_1VirtualRouterListeners = (
  input: VirtualRouterListener[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1VirtualRouterListener(entry, context)
  );
};

const serializeAws_restJson1_1VirtualRouterServiceProvider = (
  input: VirtualRouterServiceProvider,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualRouterName !== undefined && {
      virtualRouterName: input.virtualRouterName
    })
  };
};

const serializeAws_restJson1_1VirtualRouterSpec = (
  input: VirtualRouterSpec,
  context: __SerdeContext
): any => {
  return {
    ...(input.listeners !== undefined && {
      listeners: serializeAws_restJson1_1VirtualRouterListeners(
        input.listeners,
        context
      )
    })
  };
};

const serializeAws_restJson1_1VirtualServiceBackend = (
  input: VirtualServiceBackend,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualServiceName !== undefined && {
      virtualServiceName: input.virtualServiceName
    })
  };
};

const serializeAws_restJson1_1VirtualServiceProvider = (
  input: VirtualServiceProvider,
  context: __SerdeContext
): any => {
  return VirtualServiceProvider.visit(input, {
    virtualNode: value =>
      serializeAws_restJson1_1VirtualNodeServiceProvider(value, context),
    virtualRouter: value =>
      serializeAws_restJson1_1VirtualRouterServiceProvider(value, context),
    _: value => value
  });
};

const serializeAws_restJson1_1VirtualServiceSpec = (
  input: VirtualServiceSpec,
  context: __SerdeContext
): any => {
  return {
    ...(input.provider !== undefined && {
      provider: serializeAws_restJson1_1VirtualServiceProvider(
        input.provider,
        context
      )
    })
  };
};

const serializeAws_restJson1_1WeightedTarget = (
  input: WeightedTarget,
  context: __SerdeContext
): any => {
  return {
    ...(input.virtualNode !== undefined && { virtualNode: input.virtualNode }),
    ...(input.weight !== undefined && { weight: input.weight })
  };
};

const serializeAws_restJson1_1WeightedTargets = (
  input: WeightedTarget[],
  context: __SerdeContext
): any => {
  return input.map(entry =>
    serializeAws_restJson1_1WeightedTarget(entry, context)
  );
};

const deserializeAws_restJson1_1AccessLog = (
  output: any,
  context: __SerdeContext
): AccessLog => {
  if (output.file !== undefined && output.file !== null) {
    return {
      file: deserializeAws_restJson1_1FileAccessLog(output.file, context)
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1_1AwsCloudMapInstanceAttribute = (
  output: any,
  context: __SerdeContext
): AwsCloudMapInstanceAttribute => {
  return {
    __type: "AwsCloudMapInstanceAttribute",
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1AwsCloudMapInstanceAttributes = (
  output: any,
  context: __SerdeContext
): AwsCloudMapInstanceAttribute[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1AwsCloudMapInstanceAttribute(entry, context)
  );
};

const deserializeAws_restJson1_1AwsCloudMapServiceDiscovery = (
  output: any,
  context: __SerdeContext
): AwsCloudMapServiceDiscovery => {
  return {
    __type: "AwsCloudMapServiceDiscovery",
    attributes:
      output.attributes !== undefined && output.attributes !== null
        ? deserializeAws_restJson1_1AwsCloudMapInstanceAttributes(
            output.attributes,
            context
          )
        : undefined,
    namespaceName:
      output.namespaceName !== undefined && output.namespaceName !== null
        ? output.namespaceName
        : undefined,
    serviceName:
      output.serviceName !== undefined && output.serviceName !== null
        ? output.serviceName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Backend = (
  output: any,
  context: __SerdeContext
): Backend => {
  if (output.virtualService !== undefined && output.virtualService !== null) {
    return {
      virtualService: deserializeAws_restJson1_1VirtualServiceBackend(
        output.virtualService,
        context
      )
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1_1Backends = (
  output: any,
  context: __SerdeContext
): Backend[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Backend(entry, context)
  );
};

const deserializeAws_restJson1_1DnsServiceDiscovery = (
  output: any,
  context: __SerdeContext
): DnsServiceDiscovery => {
  return {
    __type: "DnsServiceDiscovery",
    hostname:
      output.hostname !== undefined && output.hostname !== null
        ? output.hostname
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Duration = (
  output: any,
  context: __SerdeContext
): Duration => {
  return {
    __type: "Duration",
    unit:
      output.unit !== undefined && output.unit !== null
        ? output.unit
        : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1EgressFilter = (
  output: any,
  context: __SerdeContext
): EgressFilter => {
  return {
    __type: "EgressFilter",
    type:
      output.type !== undefined && output.type !== null
        ? output.type
        : undefined
  } as any;
};

const deserializeAws_restJson1_1FileAccessLog = (
  output: any,
  context: __SerdeContext
): FileAccessLog => {
  return {
    __type: "FileAccessLog",
    path:
      output.path !== undefined && output.path !== null
        ? output.path
        : undefined
  } as any;
};

const deserializeAws_restJson1_1GrpcRetryPolicy = (
  output: any,
  context: __SerdeContext
): GrpcRetryPolicy => {
  return {
    __type: "GrpcRetryPolicy",
    grpcRetryEvents:
      output.grpcRetryEvents !== undefined && output.grpcRetryEvents !== null
        ? deserializeAws_restJson1_1GrpcRetryPolicyEvents(
            output.grpcRetryEvents,
            context
          )
        : undefined,
    httpRetryEvents:
      output.httpRetryEvents !== undefined && output.httpRetryEvents !== null
        ? deserializeAws_restJson1_1HttpRetryPolicyEvents(
            output.httpRetryEvents,
            context
          )
        : undefined,
    maxRetries:
      output.maxRetries !== undefined && output.maxRetries !== null
        ? output.maxRetries
        : undefined,
    perRetryTimeout:
      output.perRetryTimeout !== undefined && output.perRetryTimeout !== null
        ? deserializeAws_restJson1_1Duration(output.perRetryTimeout, context)
        : undefined,
    tcpRetryEvents:
      output.tcpRetryEvents !== undefined && output.tcpRetryEvents !== null
        ? deserializeAws_restJson1_1TcpRetryPolicyEvents(
            output.tcpRetryEvents,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1GrpcRetryPolicyEvents = (
  output: any,
  context: __SerdeContext
): (GrpcRetryPolicyEvent | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1GrpcRoute = (
  output: any,
  context: __SerdeContext
): GrpcRoute => {
  return {
    __type: "GrpcRoute",
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1_1GrpcRouteAction(output.action, context)
        : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1_1GrpcRouteMatch(output.match, context)
        : undefined,
    retryPolicy:
      output.retryPolicy !== undefined && output.retryPolicy !== null
        ? deserializeAws_restJson1_1GrpcRetryPolicy(output.retryPolicy, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1GrpcRouteAction = (
  output: any,
  context: __SerdeContext
): GrpcRouteAction => {
  return {
    __type: "GrpcRouteAction",
    weightedTargets:
      output.weightedTargets !== undefined && output.weightedTargets !== null
        ? deserializeAws_restJson1_1WeightedTargets(
            output.weightedTargets,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1GrpcRouteMatch = (
  output: any,
  context: __SerdeContext
): GrpcRouteMatch => {
  return {
    __type: "GrpcRouteMatch",
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1_1GrpcRouteMetadataList(
            output.metadata,
            context
          )
        : undefined,
    methodName:
      output.methodName !== undefined && output.methodName !== null
        ? output.methodName
        : undefined,
    serviceName:
      output.serviceName !== undefined && output.serviceName !== null
        ? output.serviceName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1GrpcRouteMetadata = (
  output: any,
  context: __SerdeContext
): GrpcRouteMetadata => {
  return {
    __type: "GrpcRouteMetadata",
    invert:
      output.invert !== undefined && output.invert !== null
        ? output.invert
        : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1_1GrpcRouteMetadataMatchMethod(
            output.match,
            context
          )
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_restJson1_1GrpcRouteMetadataList = (
  output: any,
  context: __SerdeContext
): GrpcRouteMetadata[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1GrpcRouteMetadata(entry, context)
  );
};

const deserializeAws_restJson1_1GrpcRouteMetadataMatchMethod = (
  output: any,
  context: __SerdeContext
): GrpcRouteMetadataMatchMethod => {
  if (output.exact !== undefined && output.exact !== null) {
    return {
      exact: output.exact
    };
  }
  if (output.prefix !== undefined && output.prefix !== null) {
    return {
      prefix: output.prefix
    };
  }
  if (output.range !== undefined && output.range !== null) {
    return {
      range: deserializeAws_restJson1_1MatchRange(output.range, context)
    };
  }
  if (output.regex !== undefined && output.regex !== null) {
    return {
      regex: output.regex
    };
  }
  if (output.suffix !== undefined && output.suffix !== null) {
    return {
      suffix: output.suffix
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1_1HeaderMatchMethod = (
  output: any,
  context: __SerdeContext
): HeaderMatchMethod => {
  if (output.exact !== undefined && output.exact !== null) {
    return {
      exact: output.exact
    };
  }
  if (output.prefix !== undefined && output.prefix !== null) {
    return {
      prefix: output.prefix
    };
  }
  if (output.range !== undefined && output.range !== null) {
    return {
      range: deserializeAws_restJson1_1MatchRange(output.range, context)
    };
  }
  if (output.regex !== undefined && output.regex !== null) {
    return {
      regex: output.regex
    };
  }
  if (output.suffix !== undefined && output.suffix !== null) {
    return {
      suffix: output.suffix
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1_1HealthCheckPolicy = (
  output: any,
  context: __SerdeContext
): HealthCheckPolicy => {
  return {
    __type: "HealthCheckPolicy",
    healthyThreshold:
      output.healthyThreshold !== undefined && output.healthyThreshold !== null
        ? output.healthyThreshold
        : undefined,
    intervalMillis:
      output.intervalMillis !== undefined && output.intervalMillis !== null
        ? output.intervalMillis
        : undefined,
    path:
      output.path !== undefined && output.path !== null
        ? output.path
        : undefined,
    port:
      output.port !== undefined && output.port !== null
        ? output.port
        : undefined,
    protocol:
      output.protocol !== undefined && output.protocol !== null
        ? output.protocol
        : undefined,
    timeoutMillis:
      output.timeoutMillis !== undefined && output.timeoutMillis !== null
        ? output.timeoutMillis
        : undefined,
    unhealthyThreshold:
      output.unhealthyThreshold !== undefined &&
      output.unhealthyThreshold !== null
        ? output.unhealthyThreshold
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HttpRetryPolicy = (
  output: any,
  context: __SerdeContext
): HttpRetryPolicy => {
  return {
    __type: "HttpRetryPolicy",
    httpRetryEvents:
      output.httpRetryEvents !== undefined && output.httpRetryEvents !== null
        ? deserializeAws_restJson1_1HttpRetryPolicyEvents(
            output.httpRetryEvents,
            context
          )
        : undefined,
    maxRetries:
      output.maxRetries !== undefined && output.maxRetries !== null
        ? output.maxRetries
        : undefined,
    perRetryTimeout:
      output.perRetryTimeout !== undefined && output.perRetryTimeout !== null
        ? deserializeAws_restJson1_1Duration(output.perRetryTimeout, context)
        : undefined,
    tcpRetryEvents:
      output.tcpRetryEvents !== undefined && output.tcpRetryEvents !== null
        ? deserializeAws_restJson1_1TcpRetryPolicyEvents(
            output.tcpRetryEvents,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HttpRetryPolicyEvents = (
  output: any,
  context: __SerdeContext
): string[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1HttpRoute = (
  output: any,
  context: __SerdeContext
): HttpRoute => {
  return {
    __type: "HttpRoute",
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1_1HttpRouteAction(output.action, context)
        : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1_1HttpRouteMatch(output.match, context)
        : undefined,
    retryPolicy:
      output.retryPolicy !== undefined && output.retryPolicy !== null
        ? deserializeAws_restJson1_1HttpRetryPolicy(output.retryPolicy, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HttpRouteAction = (
  output: any,
  context: __SerdeContext
): HttpRouteAction => {
  return {
    __type: "HttpRouteAction",
    weightedTargets:
      output.weightedTargets !== undefined && output.weightedTargets !== null
        ? deserializeAws_restJson1_1WeightedTargets(
            output.weightedTargets,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HttpRouteHeader = (
  output: any,
  context: __SerdeContext
): HttpRouteHeader => {
  return {
    __type: "HttpRouteHeader",
    invert:
      output.invert !== undefined && output.invert !== null
        ? output.invert
        : undefined,
    match:
      output.match !== undefined && output.match !== null
        ? deserializeAws_restJson1_1HeaderMatchMethod(output.match, context)
        : undefined,
    name:
      output.name !== undefined && output.name !== null
        ? output.name
        : undefined
  } as any;
};

const deserializeAws_restJson1_1HttpRouteHeaders = (
  output: any,
  context: __SerdeContext
): HttpRouteHeader[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1HttpRouteHeader(entry, context)
  );
};

const deserializeAws_restJson1_1HttpRouteMatch = (
  output: any,
  context: __SerdeContext
): HttpRouteMatch => {
  return {
    __type: "HttpRouteMatch",
    headers:
      output.headers !== undefined && output.headers !== null
        ? deserializeAws_restJson1_1HttpRouteHeaders(output.headers, context)
        : undefined,
    method:
      output.method !== undefined && output.method !== null
        ? output.method
        : undefined,
    prefix:
      output.prefix !== undefined && output.prefix !== null
        ? output.prefix
        : undefined,
    scheme:
      output.scheme !== undefined && output.scheme !== null
        ? output.scheme
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Listener = (
  output: any,
  context: __SerdeContext
): Listener => {
  return {
    __type: "Listener",
    healthCheck:
      output.healthCheck !== undefined && output.healthCheck !== null
        ? deserializeAws_restJson1_1HealthCheckPolicy(
            output.healthCheck,
            context
          )
        : undefined,
    portMapping:
      output.portMapping !== undefined && output.portMapping !== null
        ? deserializeAws_restJson1_1PortMapping(output.portMapping, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1Listeners = (
  output: any,
  context: __SerdeContext
): Listener[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1Listener(entry, context)
  );
};

const deserializeAws_restJson1_1Logging = (
  output: any,
  context: __SerdeContext
): Logging => {
  return {
    __type: "Logging",
    accessLog:
      output.accessLog !== undefined && output.accessLog !== null
        ? deserializeAws_restJson1_1AccessLog(output.accessLog, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MatchRange = (
  output: any,
  context: __SerdeContext
): MatchRange => {
  return {
    __type: "MatchRange",
    end:
      output.end !== undefined && output.end !== null ? output.end : undefined,
    start:
      output.start !== undefined && output.start !== null
        ? output.start
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MeshData = (
  output: any,
  context: __SerdeContext
): MeshData => {
  return {
    __type: "MeshData",
    meshName:
      output.meshName !== undefined && output.meshName !== null
        ? output.meshName
        : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1_1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1_1MeshSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1_1MeshStatus(output.status, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MeshList = (
  output: any,
  context: __SerdeContext
): MeshRef[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1MeshRef(entry, context)
  );
};

const deserializeAws_restJson1_1MeshRef = (
  output: any,
  context: __SerdeContext
): MeshRef => {
  return {
    __type: "MeshRef",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    meshName:
      output.meshName !== undefined && output.meshName !== null
        ? output.meshName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MeshSpec = (
  output: any,
  context: __SerdeContext
): MeshSpec => {
  return {
    __type: "MeshSpec",
    egressFilter:
      output.egressFilter !== undefined && output.egressFilter !== null
        ? deserializeAws_restJson1_1EgressFilter(output.egressFilter, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1MeshStatus = (
  output: any,
  context: __SerdeContext
): MeshStatus => {
  return {
    __type: "MeshStatus",
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1_1PortMapping = (
  output: any,
  context: __SerdeContext
): PortMapping => {
  return {
    __type: "PortMapping",
    port:
      output.port !== undefined && output.port !== null
        ? output.port
        : undefined,
    protocol:
      output.protocol !== undefined && output.protocol !== null
        ? output.protocol
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ResourceMetadata = (
  output: any,
  context: __SerdeContext
): ResourceMetadata => {
  return {
    __type: "ResourceMetadata",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    createdAt:
      output.createdAt !== undefined && output.createdAt !== null
        ? new Date(Math.round(output.createdAt * 1000))
        : undefined,
    lastUpdatedAt:
      output.lastUpdatedAt !== undefined && output.lastUpdatedAt !== null
        ? new Date(Math.round(output.lastUpdatedAt * 1000))
        : undefined,
    uid:
      output.uid !== undefined && output.uid !== null ? output.uid : undefined,
    version:
      output.version !== undefined && output.version !== null
        ? output.version
        : undefined
  } as any;
};

const deserializeAws_restJson1_1RouteData = (
  output: any,
  context: __SerdeContext
): RouteData => {
  return {
    __type: "RouteData",
    meshName:
      output.meshName !== undefined && output.meshName !== null
        ? output.meshName
        : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1_1ResourceMetadata(output.metadata, context)
        : undefined,
    routeName:
      output.routeName !== undefined && output.routeName !== null
        ? output.routeName
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1_1RouteSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1_1RouteStatus(output.status, context)
        : undefined,
    virtualRouterName:
      output.virtualRouterName !== undefined &&
      output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1RouteList = (
  output: any,
  context: __SerdeContext
): RouteRef[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1RouteRef(entry, context)
  );
};

const deserializeAws_restJson1_1RouteRef = (
  output: any,
  context: __SerdeContext
): RouteRef => {
  return {
    __type: "RouteRef",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    meshName:
      output.meshName !== undefined && output.meshName !== null
        ? output.meshName
        : undefined,
    routeName:
      output.routeName !== undefined && output.routeName !== null
        ? output.routeName
        : undefined,
    virtualRouterName:
      output.virtualRouterName !== undefined &&
      output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1RouteSpec = (
  output: any,
  context: __SerdeContext
): RouteSpec => {
  return {
    __type: "RouteSpec",
    grpcRoute:
      output.grpcRoute !== undefined && output.grpcRoute !== null
        ? deserializeAws_restJson1_1GrpcRoute(output.grpcRoute, context)
        : undefined,
    http2Route:
      output.http2Route !== undefined && output.http2Route !== null
        ? deserializeAws_restJson1_1HttpRoute(output.http2Route, context)
        : undefined,
    httpRoute:
      output.httpRoute !== undefined && output.httpRoute !== null
        ? deserializeAws_restJson1_1HttpRoute(output.httpRoute, context)
        : undefined,
    priority:
      output.priority !== undefined && output.priority !== null
        ? output.priority
        : undefined,
    tcpRoute:
      output.tcpRoute !== undefined && output.tcpRoute !== null
        ? deserializeAws_restJson1_1TcpRoute(output.tcpRoute, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1RouteStatus = (
  output: any,
  context: __SerdeContext
): RouteStatus => {
  return {
    __type: "RouteStatus",
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1_1ServiceDiscovery = (
  output: any,
  context: __SerdeContext
): ServiceDiscovery => {
  if (output.awsCloudMap !== undefined && output.awsCloudMap !== null) {
    return {
      awsCloudMap: deserializeAws_restJson1_1AwsCloudMapServiceDiscovery(
        output.awsCloudMap,
        context
      )
    };
  }
  if (output.dns !== undefined && output.dns !== null) {
    return {
      dns: deserializeAws_restJson1_1DnsServiceDiscovery(output.dns, context)
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1_1TagList = (
  output: any,
  context: __SerdeContext
): TagRef[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1TagRef(entry, context)
  );
};

const deserializeAws_restJson1_1TagRef = (
  output: any,
  context: __SerdeContext
): TagRef => {
  return {
    __type: "TagRef",
    key:
      output.key !== undefined && output.key !== null ? output.key : undefined,
    value:
      output.value !== undefined && output.value !== null
        ? output.value
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TcpRetryPolicyEvents = (
  output: any,
  context: __SerdeContext
): (TcpRetryPolicyEvent | string)[] => {
  return (output || []).map((entry: any) => entry);
};

const deserializeAws_restJson1_1TcpRoute = (
  output: any,
  context: __SerdeContext
): TcpRoute => {
  return {
    __type: "TcpRoute",
    action:
      output.action !== undefined && output.action !== null
        ? deserializeAws_restJson1_1TcpRouteAction(output.action, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1TcpRouteAction = (
  output: any,
  context: __SerdeContext
): TcpRouteAction => {
  return {
    __type: "TcpRouteAction",
    weightedTargets:
      output.weightedTargets !== undefined && output.weightedTargets !== null
        ? deserializeAws_restJson1_1WeightedTargets(
            output.weightedTargets,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualNodeData = (
  output: any,
  context: __SerdeContext
): VirtualNodeData => {
  return {
    __type: "VirtualNodeData",
    meshName:
      output.meshName !== undefined && output.meshName !== null
        ? output.meshName
        : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1_1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1_1VirtualNodeSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1_1VirtualNodeStatus(output.status, context)
        : undefined,
    virtualNodeName:
      output.virtualNodeName !== undefined && output.virtualNodeName !== null
        ? output.virtualNodeName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualNodeList = (
  output: any,
  context: __SerdeContext
): VirtualNodeRef[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1VirtualNodeRef(entry, context)
  );
};

const deserializeAws_restJson1_1VirtualNodeRef = (
  output: any,
  context: __SerdeContext
): VirtualNodeRef => {
  return {
    __type: "VirtualNodeRef",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    meshName:
      output.meshName !== undefined && output.meshName !== null
        ? output.meshName
        : undefined,
    virtualNodeName:
      output.virtualNodeName !== undefined && output.virtualNodeName !== null
        ? output.virtualNodeName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualNodeServiceProvider = (
  output: any,
  context: __SerdeContext
): VirtualNodeServiceProvider => {
  return {
    __type: "VirtualNodeServiceProvider",
    virtualNodeName:
      output.virtualNodeName !== undefined && output.virtualNodeName !== null
        ? output.virtualNodeName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualNodeSpec = (
  output: any,
  context: __SerdeContext
): VirtualNodeSpec => {
  return {
    __type: "VirtualNodeSpec",
    backends:
      output.backends !== undefined && output.backends !== null
        ? deserializeAws_restJson1_1Backends(output.backends, context)
        : undefined,
    listeners:
      output.listeners !== undefined && output.listeners !== null
        ? deserializeAws_restJson1_1Listeners(output.listeners, context)
        : undefined,
    logging:
      output.logging !== undefined && output.logging !== null
        ? deserializeAws_restJson1_1Logging(output.logging, context)
        : undefined,
    serviceDiscovery:
      output.serviceDiscovery !== undefined && output.serviceDiscovery !== null
        ? deserializeAws_restJson1_1ServiceDiscovery(
            output.serviceDiscovery,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualNodeStatus = (
  output: any,
  context: __SerdeContext
): VirtualNodeStatus => {
  return {
    __type: "VirtualNodeStatus",
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualRouterData = (
  output: any,
  context: __SerdeContext
): VirtualRouterData => {
  return {
    __type: "VirtualRouterData",
    meshName:
      output.meshName !== undefined && output.meshName !== null
        ? output.meshName
        : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1_1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1_1VirtualRouterSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1_1VirtualRouterStatus(output.status, context)
        : undefined,
    virtualRouterName:
      output.virtualRouterName !== undefined &&
      output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualRouterList = (
  output: any,
  context: __SerdeContext
): VirtualRouterRef[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1VirtualRouterRef(entry, context)
  );
};

const deserializeAws_restJson1_1VirtualRouterListener = (
  output: any,
  context: __SerdeContext
): VirtualRouterListener => {
  return {
    __type: "VirtualRouterListener",
    portMapping:
      output.portMapping !== undefined && output.portMapping !== null
        ? deserializeAws_restJson1_1PortMapping(output.portMapping, context)
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualRouterListeners = (
  output: any,
  context: __SerdeContext
): VirtualRouterListener[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1VirtualRouterListener(entry, context)
  );
};

const deserializeAws_restJson1_1VirtualRouterRef = (
  output: any,
  context: __SerdeContext
): VirtualRouterRef => {
  return {
    __type: "VirtualRouterRef",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    meshName:
      output.meshName !== undefined && output.meshName !== null
        ? output.meshName
        : undefined,
    virtualRouterName:
      output.virtualRouterName !== undefined &&
      output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualRouterServiceProvider = (
  output: any,
  context: __SerdeContext
): VirtualRouterServiceProvider => {
  return {
    __type: "VirtualRouterServiceProvider",
    virtualRouterName:
      output.virtualRouterName !== undefined &&
      output.virtualRouterName !== null
        ? output.virtualRouterName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualRouterSpec = (
  output: any,
  context: __SerdeContext
): VirtualRouterSpec => {
  return {
    __type: "VirtualRouterSpec",
    listeners:
      output.listeners !== undefined && output.listeners !== null
        ? deserializeAws_restJson1_1VirtualRouterListeners(
            output.listeners,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualRouterStatus = (
  output: any,
  context: __SerdeContext
): VirtualRouterStatus => {
  return {
    __type: "VirtualRouterStatus",
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualServiceBackend = (
  output: any,
  context: __SerdeContext
): VirtualServiceBackend => {
  return {
    __type: "VirtualServiceBackend",
    virtualServiceName:
      output.virtualServiceName !== undefined &&
      output.virtualServiceName !== null
        ? output.virtualServiceName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualServiceData = (
  output: any,
  context: __SerdeContext
): VirtualServiceData => {
  return {
    __type: "VirtualServiceData",
    meshName:
      output.meshName !== undefined && output.meshName !== null
        ? output.meshName
        : undefined,
    metadata:
      output.metadata !== undefined && output.metadata !== null
        ? deserializeAws_restJson1_1ResourceMetadata(output.metadata, context)
        : undefined,
    spec:
      output.spec !== undefined && output.spec !== null
        ? deserializeAws_restJson1_1VirtualServiceSpec(output.spec, context)
        : undefined,
    status:
      output.status !== undefined && output.status !== null
        ? deserializeAws_restJson1_1VirtualServiceStatus(output.status, context)
        : undefined,
    virtualServiceName:
      output.virtualServiceName !== undefined &&
      output.virtualServiceName !== null
        ? output.virtualServiceName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualServiceList = (
  output: any,
  context: __SerdeContext
): VirtualServiceRef[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1VirtualServiceRef(entry, context)
  );
};

const deserializeAws_restJson1_1VirtualServiceProvider = (
  output: any,
  context: __SerdeContext
): VirtualServiceProvider => {
  if (output.virtualNode !== undefined && output.virtualNode !== null) {
    return {
      virtualNode: deserializeAws_restJson1_1VirtualNodeServiceProvider(
        output.virtualNode,
        context
      )
    };
  }
  if (output.virtualRouter !== undefined && output.virtualRouter !== null) {
    return {
      virtualRouter: deserializeAws_restJson1_1VirtualRouterServiceProvider(
        output.virtualRouter,
        context
      )
    };
  }
  return { $unknown: Object.entries(output)[0] };
};

const deserializeAws_restJson1_1VirtualServiceRef = (
  output: any,
  context: __SerdeContext
): VirtualServiceRef => {
  return {
    __type: "VirtualServiceRef",
    arn:
      output.arn !== undefined && output.arn !== null ? output.arn : undefined,
    meshName:
      output.meshName !== undefined && output.meshName !== null
        ? output.meshName
        : undefined,
    virtualServiceName:
      output.virtualServiceName !== undefined &&
      output.virtualServiceName !== null
        ? output.virtualServiceName
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualServiceSpec = (
  output: any,
  context: __SerdeContext
): VirtualServiceSpec => {
  return {
    __type: "VirtualServiceSpec",
    provider:
      output.provider !== undefined && output.provider !== null
        ? deserializeAws_restJson1_1VirtualServiceProvider(
            output.provider,
            context
          )
        : undefined
  } as any;
};

const deserializeAws_restJson1_1VirtualServiceStatus = (
  output: any,
  context: __SerdeContext
): VirtualServiceStatus => {
  return {
    __type: "VirtualServiceStatus",
    status:
      output.status !== undefined && output.status !== null
        ? output.status
        : undefined
  } as any;
};

const deserializeAws_restJson1_1WeightedTarget = (
  output: any,
  context: __SerdeContext
): WeightedTarget => {
  return {
    __type: "WeightedTarget",
    virtualNode:
      output.virtualNode !== undefined && output.virtualNode !== null
        ? output.virtualNode
        : undefined,
    weight:
      output.weight !== undefined && output.weight !== null
        ? output.weight
        : undefined
  } as any;
};

const deserializeAws_restJson1_1WeightedTargets = (
  output: any,
  context: __SerdeContext
): WeightedTarget[] => {
  return (output || []).map((entry: any) =>
    deserializeAws_restJson1_1WeightedTarget(entry, context)
  );
};

const deserializeMetadata = (output: __HttpResponse): __ResponseMetadata => ({
  httpStatusCode: output.statusCode,
  httpHeaders: output.headers,
  requestId: output.headers["x-amzn-requestid"]
});

// Collect low-level response body stream to Uint8Array.
const collectBody = (
  streamBody: any = new Uint8Array(),
  context: __SerdeContext
): Promise<Uint8Array> => {
  if (streamBody instanceof Uint8Array) {
    return Promise.resolve(streamBody);
  }
  return (
    context.streamCollector(streamBody) || Promise.resolve(new Uint8Array())
  );
};

// Encode Uint8Array data into string with utf-8.
const collectBodyString = (
  streamBody: any,
  context: __SerdeContext
): Promise<string> =>
  collectBody(streamBody, context).then(body => context.utf8Encoder(body));

const isSerializableHeaderValue = (value: any): boolean =>
  value !== undefined &&
  value !== "" &&
  (!Object.getOwnPropertyNames(value).includes("length") ||
    value.length != 0) &&
  (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);

const parseBody = (streamBody: any, context: __SerdeContext): any =>
  collectBodyString(streamBody, context).then(encoded => {
    if (encoded.length) {
      return JSON.parse(encoded);
    }
    return {};
  });

/**
 * Load an error code for the aws.rest-json-1.1 protocol.
 */
const loadRestJsonErrorCode = (output: __HttpResponse, data: any): string => {
  const findKey = (object: any, key: string) =>
    Object.keys(object).find(k => k.toLowerCase() === key.toLowerCase());

  const sanitizeErrorCode = (rawValue: string): string => {
    let cleanValue = rawValue;
    if (cleanValue.indexOf(":") >= 0) {
      cleanValue = cleanValue.split(":")[0];
    }
    if (cleanValue.indexOf("#") >= 0) {
      cleanValue = cleanValue.split("#")[1];
    }
    return cleanValue;
  };

  const headerKey = findKey(output.headers, "x-amzn-errortype");
  if (headerKey !== undefined) {
    return sanitizeErrorCode(output.headers[headerKey]);
  }

  if (data.code !== undefined) {
    return sanitizeErrorCode(data.code);
  }

  if (data["__type"] !== undefined) {
    return sanitizeErrorCode(data["__type"]);
  }

  return "";
};
