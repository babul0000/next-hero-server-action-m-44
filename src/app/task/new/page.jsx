"use client"
import { extraTask } from '@/lib/actions';
import { Input, Label, TextField, Select, ListBox, Button, Form } from '@heroui/react';
import React from 'react';

const TaskAction = () => {
    return (
        <div>
            <h1 className="text-center text-xl font-bold mb-4">Task Action</h1>

            <div className="w-full max-w-md mx-auto">
                <Form action={extraTask} className="flex flex-col gap-4">

                    
                    <TextField isRequired name="title" type="text">
                        <Label>Title</Label>
                        <Input placeholder="Enter your task title" />
                    </TextField>

                    
                    <TextField
                        isRequired
                        minLength={5}
                        validate={(value) => {
                            if (value.length < 5) {
                                return "Description must be at least 5 characters";
                            }
                            return null;
                        }}
                        name="description"
                        type="text"
                    >
                        <Label>Description</Label>
                        <Input placeholder="Enter task description" />
                    </TextField>

                    
                    <Select name="priority" className="w-full" placeholder="Select Priority">
                        <Label>Priority</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="low" value="low">Low</ListBox.Item>
                                <ListBox.Item id="medium" value="medium">Medium</ListBox.Item>
                                <ListBox.Item id="high" value="high">High</ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    
                    <Select name="status" className="w-full" placeholder="Select Status">
                        <Label>Status</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="pending" value="pending">Pending</ListBox.Item>
                                <ListBox.Item id="in-progress" value="in-progress">In Progress</ListBox.Item>
                                <ListBox.Item id="completed" value="completed">Completed</ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    
                    <Select name="progress" className="w-full" placeholder="Select Progress">
                        <Label>Progress</Label>
                        <Select.Trigger>
                            <Select.Value />
                            <Select.Indicator />
                        </Select.Trigger>
                        <Select.Popover>
                            <ListBox>
                                <ListBox.Item id="0" value="0">0%</ListBox.Item>
                                <ListBox.Item id="50" value="50">50%</ListBox.Item>
                                <ListBox.Item id="100" value="100">100%</ListBox.Item>
                            </ListBox>
                        </Select.Popover>
                    </Select>

                    
                    
                    <TextField name="company">
                        <Label>Company</Label>
                        <Input placeholder="Enter your company name" />
                    </TextField>

                    
                    <div className="flex gap-3">
                        <Button variant="secondary">Cancel</Button>
                        <Button type="submit">Submit Task</Button>
                    </div>

                </Form>
            </div>
        </div>
    );
};

export default TaskAction;