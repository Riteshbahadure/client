"use client"
import CreateAdmin from '@/components/CreateAdmin'
import React, { useState } from 'react'
import { Modal, ModalContent, ModalHeader, ModalBody, Button, useDisclosure, Table, TableHeader, TableColumn, TableBody, TableCell, TableRow, Tooltip, Spinner } from "@nextui-org/react";
import { AiFillDelete, AiOutlineEdit } from 'react-icons/ai';
import { useFetchcityadminQuery } from '@/redux/api/superAdminApi';

const page = () => {

    const [selectedAdmin, setSelectedAdmin] = useState()

    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    const { isOpen: editAdminIsOpen, onOpen: editAdminOnOpen, onOpenChange: editAdminOnOpenChange } = useDisclosure();

    const { data, isLoading } = useFetchcityadminQuery()

    return <div className='p-4'>

        <div className='text-end my-3'>
            <Button onPress={onOpen} color='primary' variant='ghost'>+ Add Admin</Button>
        </div>

        {/* <pre>{data && JSON.stringify(data, null, 2)}</pre> */}
        {
            isLoading
                ? <Spinner></Spinner>
                : <div>
                    <Table aria-label="Example table with custom cells">
                        <TableHeader >
                            <TableColumn >Name</TableColumn>
                            <TableColumn >MOBILE</TableColumn>
                            <TableColumn >EMAIL</TableColumn>
                            <TableColumn >LOCATION</TableColumn>
                            <TableColumn >CITY</TableColumn>
                            <TableColumn >PACKAGE</TableColumn>
                            <TableColumn >ACTION</TableColumn>
                        </TableHeader>
                        <TableBody >
                            {
                                data && data.map((item, i) => <TableRow key={item._id} >
                                    <TableCell>{item.name}</TableCell>
                                    <TableCell>{item.mobile}</TableCell>
                                    <TableCell>{item.email}</TableCell>
                                    <TableCell>{item.location}</TableCell>
                                    <TableCell>{item.city}</TableCell>
                                    <TableCell>{item.package.name}</TableCell>
                                    <TableCell>
                                        <div className='flex gap-2'>
                                            <Tooltip showArrow={true} color='warning' content={`Edit ${item.name} Admin`}>
                                                <Button
                                                    onPress={editAdminOnOpen}
                                                    onClick={e => {
                                                        setSelectedAdmin(item);
                                                        console.log("Item selected", item);
                                                    }}
                                                ><AiOutlineEdit /></Button>
                                            </Tooltip>
                                            {/* <Tooltip color='danger' showArrow={true} content={`Delete ${item.name} Admin`}>
                                                <Button onPress={deleteAdminonOpen} onClick={e => {
                                                    setSelectedAdmin(item);
                                                    console.log("Item selected", item);
                                                }} ><AiFillDelete /></Button>
                                            </Tooltip> */}

                                        </div>
                                    </TableCell>
                                </TableRow>)
                            }

                        </TableBody>
                    </Table>
                </div >
        }


        {/* CREATE ADMIN MODAL START */}
        <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
                        <ModalBody>
                            <CreateAdmin onClose={onClose} />
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
        {/* CREATE ADMIN MODAL END */}


        {/* EDIT ADMIN MODAL START */}
        <Modal isOpen={editAdminIsOpen} onOpenChange={editAdminOnOpenChange} scrollBehavior='inside'>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">Edit Admin</ModalHeader>
                        <ModalBody>
                            <CreateAdmin data={selectedAdmin} onClose={onClose} />
                        </ModalBody>
                    </>
                )}
            </ModalContent>
        </Modal>
        {/* EDIT ADMIN MODAL END */}


    </div>
}

export default page