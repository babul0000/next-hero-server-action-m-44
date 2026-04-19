"use client";

import { CirclePlus } from "@gravity-ui/icons";
import { Button, Input, Label, Modal, Surface, TextField, ListBox, Select } from "@heroui/react";

export function ModalTask({ createTask }) {
    return (
        <Modal>
            <Button variant="secondary">Modal Task</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <CirclePlus className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Contact Us</Modal.Heading>
                            <p className="mt-1.5 text-sm leading-5 text-muted">
                                Fill out the form below and well get back to you. The modal adapts automatically
                                when the keyboard appears on mobile.
                            </p>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form action={createTask} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="title" type="text">
                                        <Label>title</Label>
                                        <Input placeholder="Enter your task title" />
                                    </TextField>
                                    <TextField className="w-full" name="description" type="text">
                                        <Label>description</Label>
                                        <Input placeholder="Enter your email" />
                                    </TextField>


                                    <Select className="w-[256px]" placeholder="Select one">
                                        <Label>Priority</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="low" textValue="low">
                                                    low
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="medium" textValue="medium">
                                                    medium
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="high" textValue="high">
                                                    high
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>




<Select className="w-[256px]" placeholder="Select one">
                                        <Label>Status</Label>
                                        <Select.Trigger>
                                            <Select.Value />
                                            <Select.Indicator />
                                        </Select.Trigger>
                                        <Select.Popover>
                                            <ListBox>
                                                <ListBox.Item id="pending" textValue="pending">
                                                    pending
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="in-progress" textValue="in-progress">
                                                    in-progress
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                                <ListBox.Item id="completed" textValue="completed">
                                                    completed
                                                    <ListBox.ItemIndicator />
                                                </ListBox.Item>
                                            
                                            </ListBox>
                                        </Select.Popover>
                                    </Select>




                                    <TextField className="w-full" name="company">
                                        <Label>Company</Label>
                                        <Input placeholder="Enter your company name" />
                                    </TextField>
                                    

                                    <Modal.Footer>
                                        <Button slot="close" variant="secondary">
                                            Cancel
                                        </Button>
                                        <Button type="submit" >Submit Task</Button>
                                    </Modal.Footer>

                                </form>


                            </Surface>
                        </Modal.Body>

                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}