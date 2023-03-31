/*
 * ***********************************************************
 *  Copyright (c) 2023 Contributors to the Eclipse Foundation
 *  <p>
 *  See the NOTICE file(s) distributed with this work for additional
 *  information regarding copyright ownership.
 *  <p>
 *  This program and the accompanying materials are made available under the
 *  terms of the Eclipse Public License 2.0 which is available at
 *  http://www.eclipse.org/legal/epl-2.0
 *  <p>
 *  SPDX-License-Identifier: EPL-2.0
 * **********************************************************
 *
 */


CREATE TABLE IF NOT EXISTS device_status
(
    id                VARCHAR(100) not null,
    tenant_id         VARCHAR(100) not null,
    device_id         VARCHAR(100) not null,
    update_time       VARCHAR(100) not null,
    binary_data       VARCHAR      not null,

    PRIMARY KEY (id, tenant_id, device_id)
);